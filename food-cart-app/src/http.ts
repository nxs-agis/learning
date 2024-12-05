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

// export async function postUser(
//   items: CartType[],
//   formData: FormDataEntryValue
// ) {
//   try {
//     const response = await fetch("http://localhost:3000/orders", {
//       method: "POST",
//       body: JSON.stringify({
//         order: {
//           items,
//           customer: formData,
//         },
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || "Failed to fetch data");
//     }

//     const resData = await response.json();
//     return resData;
//   } catch (error) {
//     console.log("Error: ", error);
//     throw error;
//   }
// }
