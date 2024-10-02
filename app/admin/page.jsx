import { TextField } from '@mui/material'
import Styles from './page.module.css'
const page = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.formContainer}>
        <form className={Styles.form}>
          <div className={Styles.edit}>
           <TextField type='text' name='title' label='Title'
           sx={{width:400}}
           />
          </div>
        
         <div className={Styles.edit}>
          <TextField label='Content' type='text' minRows={4} maxRows={8} sx={{width:400}} name='content' />
         </div>
         
          <div className={Styles.edit}>
            <label htmlFor="image">Uplaod Image</label>
            <input name='image' type='file'/>
          </div>
          

          
        </form>
      </div>
    </div>
  )
}

export default page