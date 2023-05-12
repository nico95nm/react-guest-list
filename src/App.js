/* eslint-disable upleveled/no-unnecessary-html-attributes */
/* eslint-disable no-restricted-syntax */
import './App.module.scss';
import { useState } from 'react';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [label, setLabel] = useState('');
  return (
    <>
      <section className="ContainerOne">
        <header>
          <div>
            <p>WELCOME! (Image)</p>
          </div>
        </header>
        <h1>You are invited.</h1>
        <img src="" alt="Food" />
        <p>
          Nico's restaurant is a warm and welcoming eatery that serves delicious
          food inspired by traditional Mediterranean and Middle Eastern cuisine.
          The restaurant boasts a cozy and intimate atmosphere, with rustic
          décor that features natural wood, warm colors, and soft lighting. Upon
          entering the restaurant, customers are greeted by friendly staff who
          are dedicated to providing exceptional service and ensuring a
          memorable dining experience. The menu at Nico's restaurant is filled
          with a variety of dishes that cater to a range of tastes and dietary
          requirements, including vegetarian and gluten-free options. From
          savory kebabs and grilled meats to fresh salads and dips, Nico's menu
          features a selection of bold and flavorful dishes that are made with
          high-quality, locally-sourced ingredients. The restaurant is also
          known for its homemade flatbreads and hummus, which are a popular
          choice among regulars. Nico's restaurant also offers a carefully
          curated selection of wines and cocktails that perfectly complement the
          rich and flavorful dishes on the menu. Whether you're looking for a
          romantic dinner for two or a casual night out with friends, Nico's
          restaurant is the perfect destination for those who appreciate great
          food, warm hospitality, and a cozy atmosphere.
        </p>
        <p>
          Nico's restaurant is open 7 days a week, from 11:00 am to 10:00 pm.
          The restaurant is open for both lunch and dinner, and customers can
          enjoy their meals either indoors or outdoors on the restaurant's cozy
          patio. The restaurant also offers takeout and delivery options for
          those who prefer to enjoy their meals in the comfort of their own
          homes. The takeout and delivery services are available during the
          restaurant's regular business hours, and customers can place their
          orders by phone or through the restaurant's online ordering system.
        </p>
        <p>Monday at 8pm</p>
      </section>
      <section className="ContainerTwo">
        <p>Please fill the form below:</p>
        <div>
          <p className="Form">
            First Name:
            <input
              type="name"
              placeholder="Fist Name"
              onChange={(event) => setFirstName(event.currentTarget.value)}
            />
          </p>
          <p>
            Last Name:
            <input
              type="name"
              placeholder="Last Name"
              onClick={(event) => setLastName(event.currentTarget.value)}
            />
          </p>
        </div>
        <div>
          <button
            onClick={() => {
              setLabel(`${firstName} ${lastName}`);
              console.log(firstName, lastName);
            }}
          >
            Submit
          </button>
        </div>
      </section>
      <table>
        <tr>
          <td>#</td>
          <td>Name</td>
          <td>Attending Status</td>
          <td>Note</td>
          <td> </td>
        </tr>
        <tr>
          <td>1.</td>
          <td>{label}</td>
          <td>Attending/Not Attending</td>
          <td>He love meat</td>
          <td>
            <button>Remove</button>
          </td>
        </tr>
      </table>
      <section className="Bottom">
        <span>About</span>
        <span>Phone</span>
        <span>Email</span>
        <span>Jobs</span>
        <span>Delivery</span>
      </section>
    </>
  );
}
