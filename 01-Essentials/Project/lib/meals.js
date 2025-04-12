import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";

import xss from "xss";

const db = sql("meals.db");

export function getMeals() {
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const filename = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${filename}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed");
    }
  });
  // All requests will be sent to the public folder hence why public is removed from the path
  meal.image = `/images/${filename}`;

  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, image, slug, creator, creator_email)
    VALUES
      (?, ?, ?, ?, ?, ?, ?)
  `
  ).run(
    meal.title,
    meal.summary,
    meal.instructions,
    meal.image,
    meal.slug,
    meal.creator,
    meal.creator_email
  );
}
