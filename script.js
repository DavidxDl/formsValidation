window.onload = () => {
    document.getElementById('zip').oninput = validateZipCode;
    document.getElementById('country').onchange = validateZipCode;
    document.getElementById('confirm-password').oninput = validatePasswords
    document.getElementById('password').oninput = validatePasswords
    document.getElementById('register').addEventListener('click', (e) => {
        e.preventDefault()
        const form = document.querySelector('form')
        if (form.checkValidity()){
            register()
        } else {
            form.reportValidity()
        }
    })


}

const constraints = {
    chile: [
        /^\d{7}$/,
        'May only be required for bulk mail.'
    ],
    argentina: [
        /^\d{4}$/,
        "Codigo Postal Argentino (CPA), where the first A is the province code as in ISO 3166-2:AR, the four numbers are the old postal codes, the three last letters indicate a side of the block. Previously NNNN which is the minimum requirement as of 2006."
    ],
    peru: [
        /^\d{5}$/,
        ''
    ],
    paraguay: [
        /^\d{4}$/,
        '',
    ]
}

function validateZipCode (){
    const country = document.getElementById('country').value;
    console.log(country)
    const zipcode = document.getElementById('zip')

    const constraint = new RegExp(constraints[country][0], '');
    console.log(constraint)

    if (constraint.test(zipcode.value)){
        zipcode.setCustomValidity('');
    } else {
        zipcode.setCustomValidity('The ZipCode, is invalid')
    }
}

function validatePasswords () {
    const password = document.getElementById('password')
    const confirmPassword = document.getElementById('confirm-password')
    const pattern = new RegExp(/^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/, '')

    if (pattern.test(password.value)){
        password.setCustomValidity('')
    } else {
        password.setCustomValidity('Password has to have at least 8 caracters, and a special caracter like (!#$) etc')
    }
    if (confirmPassword.value !== password.value){
        confirmPassword.setCustomValidity('Passwords dont match!')
    } else {
        confirmPassword.setCustomValidity('')
    }
}

function register () {
    const body = document.querySelector('body')
    body.innerHTML = ''

    const congrats = document.createElement('h1')
    congrats.classList.add('congratsMessage')
    congrats.innerText = 'Congrats! you have passed!'

    const gif = document.createElement('img')
    gif.classList.add('gif')
    gif.src = 'https://gifdb.com/images/high/nacho-libre-high-five-3j3konmnvmhruqsy.webp'

    body.append(congrats, gif)
}