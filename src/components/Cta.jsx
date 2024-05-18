import styles from "../style"
import Button from "./Button"

const Cta = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.padding} ${styles.marginY} bg-black-gradient-2 flex-col sm:flex-row rounded-[20px] box-shadow`} >
      <div className="flex flex-col flex-1" >
        <h2 className={`${styles.heading2} max-w-[470px] mt-5`}>Lets try our service now! </h2>
        <p  className={`${styles.paragraph} sm:mt-10 ml-0 sm:mt-0 mt-10`} >Everything you need to accept card payements and grow your business anywhere on the planet</p>
      </div>
      <div>
      <Button className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 `} />

      </div>
    </section>
  )
}

export default Cta

