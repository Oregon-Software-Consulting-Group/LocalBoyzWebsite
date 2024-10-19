export default function HelloPage() {
  return (
  <div>
    <div style={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url(https://s3-media0.fl.yelpcdn.com/bphoto/5SbnnMeX793h7sFNI-vhZA/o.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -1
      }}></div>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the color and opacity as needed
        zIndex: -1
      }}></div>
        <h1 style={{fontSize: '100px', fontFamily: 'papyrus, charcoal, fantasy', fontWeight:'bold'}}>LOCAL BOYZ</h1>
        <h2 style={{fontSize: '80px', fontFamily: 'papyrus, charcoal, fantasy', fontWeight:'bold'}}> Hawaiian Cafe</h2>
    </div>

    <div style={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '20vh',
      backgroundColor: 'rgb(0, 0, 0)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '20px'
    }}>
      <a href="https://www.localboyzhawaiiancafe.com/lbhc23-menu.pdf" target="_blank" style={{
        display: 'inline-block',
        fontSize:'50px',
        fontFamily: 'papyrus, charcoal, fantasy',
        fontWeight:'bold',
        color: 'white',
        textDecoration: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        textAlign: 'center',
        

      }}>MENU</a>
    </div>
  </div>

  );
}
