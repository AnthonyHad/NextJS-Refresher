"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
  // Creates a server action only executed on a server
  //   "use server";

  const meal = {
    title: formData.get("title"), // depends on the name of input field
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    image: formData.get("image"),
  };
  // Server side validation. Can use some validation library if needed
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    // throw new Error("Invalid input");
    return {
      message: "Invalid Input",
    };
  }

  await saveMeal(meal);
  // Using layout will revalidate all nested pages. The default is 'page'
  revalidatePath("/meals");

  redirect("/meals");
}

//import { useActionState } from 'react'
