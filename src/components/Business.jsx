import { features } from "../constants"
import styles, {layout} from "../style"
import Button from "./Button"

const Business = () => {
  return (
    <section id="features" className={`${layout.section}`} >
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2} >You do the business, <br className='sm:block hidden' /> we will handle the money.</h2>
         <p className={`${styles.paragraph} max-w-[490px] mt-5`} > with the right credit card, you can improve your finanical life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.  </p> 
      </div>

      <Button styles='mt-5' />
      
      <div className={`${layout.sectionImg}`} >

      </div>

    </section>
  )
}

export default Business
