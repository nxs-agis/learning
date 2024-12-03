export async function getMeals() {
  try {
    const response = await fetch("http://localhost:3000/meals", {
      method: "GET",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch data");
    }

    const resData = await response.json();
    return resData;
  } catch (error) {
    console.log("Error: ", error);
  }
}
