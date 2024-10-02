import NormalHeader from '@/Components/NormalHeader'
import Styles from './page.module.css'
import hero from '../../Images/hero3.jpg'
import { Facebook, LinkedIn, Twitter, YouTube } from '@mui/icons-material'
import { Button, Divider, TextField } from '@mui/material'
import { blue } from '@mui/material/colors'

const page = () => {
  return (
    <>
    <NormalHeader heroName={hero} pageTitle='Contact Us '/>
    <div className={Styles.container}>
        <div className={Styles.title}>Contact Looking for more information? Get in touch with us today.</div>
        <div className={Styles.rightSideContainer}>
          <div className={Styles.getInTouch}>
            <div className={Styles.getInTouchInfo} >
              <h3>Email</h3>
              <p>test@gmail.com</p>
            </div>
            <Divider orientation='vertical' sx={{borderRightWidth:2, borderColor:blue[200]}}/>
            <div className={Styles.getInTouchInfo} >
              <h3>Phone</h3>
              <p>+233 3456597</p>
            </div>
            <Divider orientation='vertical' sx={{borderRightWidth:2, borderColor:blue[200]}}/>
            <div className={Styles.getInTouchInfo} >
              <h3>Follow</h3>
              <div className={Styles.socialMediaIcons}>
                <Facebook sx={{fontSize:18}}/>
                <Twitter sx={{fontSize:18}}/>
                <YouTube sx={{fontSize:18}}/>
                <LinkedIn sx={{fontSize:18}}/>
              </div>
            </div>
          </div>
          <div>
            <form className={Styles.formContainer}>
              <div className={Styles.names} >
             
              <TextField id='outlined-basic' label='Firstname' variant='outlined' sx={{width:300}} required />
              <TextField id='outlined-basic' label='Lastname' variant='outlined'sx={{width:300}} required />
              </div>
              <div>
                <TextField id='outlined-basic' label='Email' variant='outlined' required sx={{width:'100%'}}/>
              </div>
              <div>
                <TextField id='outlined-basic' label='Phone' variant='outlined' type='text' sx={{width:'100%'}} />
              </div>
             <div>
              <TextField id='outlined-basic' label='Message' variant='outlined' type='text'multiline minRows={4} maxRows={8}sx={{width:'100%'}}/>
             </div>
              <Button sx={{backgroundColor:'blue', color:'white',height:50}}>Submit</Button>
              </form>
              
           
          </div>
        </div>
    </div>
    </>
  )
}

export default page