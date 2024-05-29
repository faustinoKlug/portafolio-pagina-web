/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '80vh': '80vh',
        '20vh': '60vh',
        '170px': '170px',
        '700px': '700px',
        '190px': '190px',
        '250px': '260px',
        '200px': '270px',
        '310px': '310px',
        '325px': '380px'
      },
      fontSize: {
        '4.25rem': '2.6rem',
        '3.5rem': '3rem',
        '1.8rem': '1.6rem',
        '1.9rem': '1.9rem',
        '55px': '55px',
        '30px': '30px'
      },
      colors: {
        'b': 'rgba(0, 0, 0, 0.7)',
        'yellowHunt': '#EEC643',
        'blackHunt': '#141414',
        'blackM': '#0E0C0C',
        'nigger': '#171313',
        'bg-hero': '#050816',
        'primary': '#31235f',
        'secondary': '#070C20',
        'borde': '#0B1332',
        'perfil': '#3451BE',
        'proy': '#070B1E'
      },
      margin: {
        '18px': '14px'
      },
      fontFamily: {
        'Poppins': 'Poppins'
      },
      width: {
        '25.5rem': '25.5rem',
        '293px': '293px',
        '99per': '99%',
        '550px': '550px',
        '400px': '400px',
        '300px': '300px',
        '770px': '770px',
        '320px': '320px',
        '250px': '250px',
        '375px': '375px',
        '95per': '95%',
        '350px': '350px',
        '1000px': '1100px',
        '800px': '800px',
        '520px': '515px',
        '942px': '918px',
        '500px': '500px',
        '530px': '530px',
        '470px': '470px',
        '430px': '440px',
        '420px': '420px',
        '450px': '450px',
        '120px': '120px',
      },
      boxShadow: {
        'contacto': '2px 2px 10px rgba(0, 0, 0, 0.5)'
      },
      animation: {
        'slide-left': 'slide-in-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide-top': 'slide-in-top 1s cubic-bezier(.25,.46,.45,.94) both',
        'slide-fwd': 'slide-in-fwd-center 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide-bottom': 'slide-in-bottom 1s cubic-bezier(.25,.46,.45,.94) both',
        'slide-right': 'slide-in-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      backgroundColor: {
        'header-mobile': 'rgba(209, 213, 219, 0.4)',
        'header-mobile2': 'rgba(229, 231, 235, 0.2)',
        'cards': '#141111',
        'header-mob': 'rgba(30, 41, 59, 0.4)',
        'header-mob-hover': 'rgba(30, 41, 59, 0.3)',
        'bg-header-mob2': '#040714',
      },
      screens: {
        'moises': '1380px',
        '340px': '340px',
        '800px': '800px',
        '1000px': '1000px',
        '1077px': '1077px',
        '911px': '911px',
        '877px': '877px',
        '1100px': '1030px',
        '942px': '942px',
        '830px': '830px',
        '350px': '350px',
        '460px': '460px',
        '1120px': '1120px',
        '1150px': '1150px'
      },
      maxWidth: {
        '600px': '630px',
        '390px': '390px',
        '375px': '375px',
        '450px': '450px',
        '510px': '510px',
        '420px': '425px',
        '470px': '470px',
        '500px': '500px',
        '400px': '400px',
        '340px': '340px',
        '540px': '540px',
        '700px': '700px',
        '380px': '370px',
        '760px': '760px'
      },
      minWidth: {
        '370px': '370px',
        '260px': '260px',
        '300px': '300px',
        '400px': '400px',
      }
    },
  },
  plugins: [],
}

