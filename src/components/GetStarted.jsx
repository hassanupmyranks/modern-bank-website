import styles from '../style'
import { arrowUp } from '../assets'
const GetStarted = () => (
    <div className= {`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient rounded-full cursor-pointer p-[2px]` } >
     <div  className={`${styles.flexCenter} flex-col bg-primary rounded-full w-[100%] h-[100%]`} >
     <div className={`${styles.flexStart} flex-row`}>
      <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2 '>
        <span className='text-gradient'>Get</span>
      </p>
        <img src={arrowUp} alt="arrowUp" className='w-[23px] h-[23px] object-contain'/>
      </div> 
      <p className='font-poppins font-medium text-[18px] leading-[23px] '>
        <span className='text-gradient'>Started</span>
      </p>
        </div> 
    </div>
  )

export default GetStarted
