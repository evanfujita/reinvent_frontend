export const template = (restaurant, name, rep, ing, email, notes) => {
    return({
      restaurant_name: restaurant,
      from_name: name,
      to_name: rep,
      order: ing,
      to_email: email,
      note: notes
    })
  }

