import styled from "styled-components";

// All of the styling for the registration sliding area :) 
export const H1 = styled.h1`
    text-align: center;
    width: 100%;
    color: #111;
    font-weight: lighter;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;`

export const Wrapper = styled.div`
    height: 150vh;
    margin-top: -25px;
    width: 100%;
    display: -webkit-flex;
    flex-direction: column;
    padding-top: 8%;
    align-items: center;
    background: linear-gradient(0deg, rgba(37,142,160,1) 35%, rgba(129,121,144,1) 100%);`

export const FormWrapper= styled.div`
    width: 90%;
    min-width: 300px;
    max-width: 600px;
    flex-direction: column;
    padding: 10px 25px 25px 25px;
    box-shadow: 0px 10px 50px #555;
    background-color: #ffffff;
    `

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`

export const Label = styled.h1`
    font-size: 1.2em;
    width: 100%;
    color: #111;
    font-weight: lighter;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    float:left
    padding: 1%;
    margin: 1%;
    ${props =>
        props.gender ?
        `font-size: 1em;
        font-weight: light;
        color: black;    `
        : ``};


    `

export const Input = styled.input`
    padding: 10px 10px;
    margin: 0 0 1.5% 0;
    width: 100%;
    border-radius: 5px;
    outline: none;
    border: 1px solid #cfcfcf;
    float: right;
    ::placeholder {
        font-size: 1em;
        font-weight: light;
        color: #999;
    }
    ${props =>
        props.disabled ?
        `
        background: #F0F0F0;
        `: `
        ''
        `};
    `

export const Button = styled.button`
    margin-right : 10px;`

export const New = styled.div`
    flex-wrap: break-word;
    width: 100%;
    `

export const ErrorMessage = styled.h1`
    color: red;
    font-size: 0.75em;`

export const CreateButton = styled.button`
    color: #fff;
    border: 2px solid #fff;
    margin-top: 1em;
    padding: 8px 8px;
    font-size: 1em;
    width: 100%;
    font-weight: lighter;
    display: block;
    letter-spacing: 1px;
    &:hover {
        // color: #519e8a;
        // background-color: #fff;
        border: 2px solid #519e8a;}
    &:small {
        color: #999;
        font-weight: lighter;}
        ${props =>
            props.disabled ?
            `
            background: lightgrey;
            `: `
            background: #519e8a;
            `};
        ` 
    

export const A_center = styled.a`
    width: 100%;
    text-align: center;
    display: block;`

export const A = styled.a`
    width: 100%;`

export const Error = styled(Label)`
    color: red;
    margin-top: 1em;
    text-align: center; 
    font-size: 1em;`

export const Buttons = styled.div`
    display: -webkit-flex;
    width: 100%;
    justify-content: center;

    ${props =>
        props.center ?
        `
        justify-content: center;
        `: `
        flex-direction: space-between;
        `}`

export const Right = styled.div`
    float: right;
    display: flex;`

export const Left = styled.div`
    float: left;
    min-width: 30%;
    width: 100%;`

export const Tool = styled.section`
    background: #817990;
    color: white;
    display: -webkit-flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
`   
   
   
export const MenuButton=styled.button`
    background: inherit;
    border: none;
    color: white;
    font-size: 14px;
    height: 100%;
    &:hover {
    background: #645581;
        }
`

export const TextArea = styled.textarea`
width: 100%;`

export const WideButton = styled.input`
width: 100%;
display: inline-block;
background-color: lightgrey;
padding: .5em;
margin: 3px;
color: black;

font: inherit;
&:hover {
    background-color: rgba(55, 174, 195, 1);
};
${props =>
    props.chosen ?
    `
    background-color: rgba(55, 174, 195, 1);
    `: `
    `}

cursor: pointer;
-webkit-transition-duration: 0.2s; 
transition-duration: 0.2s;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;`



export const Checkbox = styled.div`
  display: inline-block;
  > input {
    opacity: 0;
  }
  > input + label {
    position: relative; /* permet de positionner les pseudo-éléments */
    padding-left: 25px; /* fait un peu d'espace pour notre case à venir */
    cursor: pointer;    /* affiche un curseur adapté */
    &:before {
      content: '';
      position: absolute;
      left:0; top: 1px;
      width: 17px; height: 17px; /* dim. de la case */
      border: 1px solid #aaa;
      background: #f8f8f8;
      border-radius: 3px; /* angles arrondis */
      box-shadow: inset 0 1px 3px rgba(0,0,0,.3) /* légère ombre interne */
    }
    &:after {
      content: '✔';
      position: absolute;
      top: -1px; left: 2px;
      font-size: 16px;
      color: #09ad7e;
      transition: all .2s; /* on prévoit une animation */
    }
  }
  > input:not(:checked) + label {
      &:after {
        opacity: 0; /* coche invisible */
        transform: scale(0); /* mise à l'échelle à 0 */
      }
  }
  > input:disabled:not(:checked) + label {
      &:before {
        box-shadow: none;
        border-color: #bbb;
        background-color: #ddd;
      }
  }
  > input:checked + label {
    &:after {
      opacity: 1; /* coche opaque */
      transform: scale(1); /* mise à l'échelle 1:1 */
    }
  }
  > input:disabled:checked + label {
    &:after {
      color: #999;
    }
  }
  > input:disabled + label {
    color: #aaa;
  }
  > input:checked:focus + label, input:not(:checked):focus + label {
    &:before {
      border: 1px dotted blue;
    }
  }
`;
//rgba(37,142,160,1)