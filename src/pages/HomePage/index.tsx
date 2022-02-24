import React from 'react'
import Axios from 'axios'
import Button from '../../components/Button'
import Checkbox from '../../components/Checkbox'
import { Footer, Main, Seperator } from '../../components/StyledComponents'
import TextField from '../../components/TextField'

const HomePage = (): React.ReactElement => {

  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [isAccept, setAccept] = React.useState(false);

  const handleSave = () => {
    /*
      We can check the other conditions such as email validation and password length, strength ...
      Also we can check there is no repeated email in DB.
    */
    if(firstname && lastname && phone && email && password && confirmPassword) {
      if(password === confirmPassword) {
        if(isAccept) {
          Axios.post(
            '/api/signup',
            {
              firstname,
              lastname,
              phone,
              email,
              password, //We should encode password using hash function such as MD5.
            }
          ).then((data) => {
            alert('You are registered successfully.');
          }).catch((error) => {
            alert(error);
          })
        } else {
          alert('You must accept the Terms and Conditions.')
        }
      } else {
        alert('The password and confirmation password do not match.')
      }
    }
    else {
      alert('All fields are required.');
    }
  }
  
  return (
    <>
      <Main>
        <h2>S'inscrire</h2>
        <p>Rejoignez Tipaw aujourd'hui. C'est gratuit!</p>
        <span>Vous êtes un refuge, un éleveur, un vétérinaire ou un toiletteur?</span>
        <a href='#'>Cliquez ici</a>
        <Button
          icon='/google.png'
          title='Inscription avec Google'
        />
        <Button
          color='#016699'
          icon="/facebook.png"
          title='Inscription avec Facebook'
        />
        <Seperator />
        <TextField
          value={firstname}
          onChange={setFirstname}
          label='Votre prénom'
          required
        />
        <TextField
          value={lastname}
          onChange={setLastname}
          label='Votre nom'
          required
        />
        <TextField
          value={phone}
          onChange={setPhone}
          label='Numéro de téléphone'
          required
        />
        <TextField
          value={email}
          onChange={setEmail}
          label='Votre email'
          required
        />
        <TextField
          value={password}
          onChange={setPassword}
          label='Votre mot de passe'
          required
          type='password'
        />
        <TextField
          value={confirmPassword}
          onChange={setConfirmPassword}
          label='Confirmez votre mot de passe'
          required
          type='password'
        />
        <Checkbox
          value={isAccept}
          onChange={setAccept}
          label="J'ai lu et accepte les conditions générales d'utilisation de Tipaw"
        />
        <Button
          color='#FFCC01'
          title="S'inscrire"
          onClick={() => handleSave()}
        />
        <Footer>
          <p>Vous avez déjà un compte?</p>
          <a href='#signin'>S'inscrire</a>
        </Footer>
      </Main>
    </>
  )
}

export default HomePage