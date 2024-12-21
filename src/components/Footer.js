import React from 'react';


export default function Footer() {
  return (
    <>
      <footer className="footer" style={{backgroundColor:'rgb(110, 44, 242)',color:'white',fontFamily:'cursive', height:'300px', width:'100%', display:'flex', justifyContent:'center', alignItems:'center', padding:'20px', position:'relative', bottom:0}}>
        <div className="footer-content" style={{textAlign:'center'}}>
          <h3 className="text-center">This website made with Lots of Love</h3>
          <hr style={{border:'2px solid #fff', width:'100%', margin:'20[px auto'}}/>
          <div className="developer-info" style={{marginTop:'0px'}}>
              <p><strong>Developer Name: </strong>Tanishq lather</p>
              <p><strong>Linkedin: </strong>Tanishq lather</p>
              <p><strong>Twitter: </strong>@Tanishq_lather</p>
              <p><strong>Email: </strong>tanishqlather@gmail.com</p>
          </div>
        </div>
      </footer>
    </>
  )
}

