
import Profile from "./profile.jsx";
import "./contact.css";

export default function Contact () {
  return (
    <div className="contact">
        <h1 id="name"> My Contacts</h1>
      <Profile
        name="linus"
        email="linustorvalds@gmail.com"
        profile_picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEnL8ZwQWvyBpYikXyJNDV_op9VBxwe1A3hoKGWYB4g&s=10"
      />

      <Profile
        name="Peter"
        email="spidey22@gmail.com"
        profile_picture="https://www.denofgeek.com/wp-content/uploads/2024/04/Tobey-Maguire-dancing-in-Spider-Man-3.jpeg?fit=1200%2C675"
      />

      <Profile
        name="The Goat"
        email="goatthings@gmail.com"
        profile_picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-4iw07pAQxhdBwBj0Y_vFkSlMQqB66dtJ-ls4SD-9A&s=10"
      />
    </div>
  );
}