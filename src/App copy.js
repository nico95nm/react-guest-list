/* eslint-disable upleveled/no-unnecessary-html-attributes */
/* eslint-disable no-restricted-syntax */
import './App.module.scss';
import { useState } from 'react';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [label, setLabel] = useState('');
  const [box, setBox] = useState();
  const guest = [
    {
      name: {
        first: 'Nikola',
        last: 'Miletic',
      },
    },
  ];
  const [users, setUsers] = useState(guest);
  console.log(users);

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
        <p>cx</p>
        <p>cx</p>
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
              id="lastName"
              placeholder="Last Name"
              onChange={(event) => setLastName(event.currentTarget.value)}
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
          <td>
            <form>
              {JSON.stringify(box)}
              <label>
                <input
                  checked={box}
                  type="checkbox"
                  onChange={(event) => {
                    /*                     setBox(event.currentTarget.checked);
                     */ console.log(event.currentTarget.checked);
                  }}
                />
                Attenting
              </label>
            </form>
          </td>
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
