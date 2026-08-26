import { useState } from "react";
import Profile from "./profile.jsx";
import "./contact.css";

export default function Contact() {
  const [search, setSearch] = useState("");

  const contacts = [

    {
      name: "linus",
      email: "linustorvalds@gmail.com",
      profile_picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEnL8ZwQWvyBpYikXyJNDV_op9VBxwe1A3hoKGWYB4g&s=10"
    },
    {
      name: "Peter",
      email: "spidey22@gmail.com",
      profile_picture:
        "https://www.denofgeek.com/wp-content/uploads/2024/04/Tobey-Maguire-dancing-in-Spider-Man-3.jpeg?fit=1200%2C675"
    },
    {
      name: "The Goat",
      email: "goatthings@gmail.com",
      profile_picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-4iw07pAQxhdBwBj0Y_vFkSlMQqB66dtJ-ls4SD-9A&s=10"
    },
   {
      name :"Ziz",
      email :"zizzz1@gmail.com",
      profile_picture :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf43uEjuOmApsXpDCPTtvEYGaXLRec72CxUCc9FeX7NQ&s"
   },  
  { 
      name :"willson",
      email :"losentowillson@gmail.com",
      profile_picture :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe6XOgfpqL_Hqg33H1GQPNYpULD74h89ZHgfqrumjR6g&s=10"
  }
  ];

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="contact">
      <h1 id="name">My Contacts</h1>

      <input
        type="text"
        id ="search"
        placeholder="Search contacts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredContacts.map((contact) => (
        <Profile
          key={contact.email}
          name={contact.name}
          email={contact.email}
          profile_picture={contact.profile_picture}
        />
      ))}
    </div>
  );
}

  