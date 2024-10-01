import NormalHeader from "@/Components/NormalHeader"
import hero6 from '../../Images/hero6.jpg'
import Styles from './page.module.css'
import StaffCard from "@/Components/StaffCard"
import staff1 from '../../Images/staff1.jpg'
import staff2 from '../../Images/staff2.jpg'
import staff3 from '../../Images/staff3.jpg'


const page = () => {
    const staffData = [
        {id:1, name:"Obed Sarkodie", title:"Editor-In-Chief",email:"first@gmail.com", contact: 24567894, pic:staff1},

        {id:2, name:"Cole Palmer", title:"Prodection Specialist",email:"second@gmail.com", contact: 24574594, pic:staff2},

        {id:3, name:"Princess Oddete", title:"Sales",email:"third@gmail.com", contact: 24565674 , pic:staff3}
    ]


  return (
    <div>
        <NormalHeader heroName={hero6} pageTitle='About US'/>
        <div className={Styles.container}>
            <div className={Styles.topic}>
                <h2>Quality news, <br /><span>where you want</span> <br />it, when you <br /> want it.</h2>
                </div>
            <div className={Styles.content}>
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                <br />
                <p>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
            </div>
        </div>
        <div className={Styles.cardContainer}>
            <h3 className={Styles.staff}>Staff</h3>
            <div className={Styles.staffCards}>
            { staffData && staffData.map((staff)=>(
          
            <div 
            key={staff.id} 
            >
                
            <StaffCard 
            staffImage={staff.pic} 
            staffName={staff.name} 
            staffMail={staff.email} 
            staffContact={staff.contact} 
            staffTitle={staff.title}
            />
            </div>
           
            ))}
             </div>
       
        </div>
        
    </div>
  )
}

export default page