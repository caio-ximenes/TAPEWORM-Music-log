import { motion } from "framer-motion";
import styles from "./TapeBreak.module.scss";
import tape from "./tape.png";

export default function TapeBreak() {
  return (
    <div className={styles.container}>
      {/* Esquerda */}
      <motion.div
        className={`${styles.half} ${styles.left}`}
        initial={{ x: 0, rotate: 0 }}
        animate={{ x: -14, rotate: -12 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <img src={tape} alt="" />
      </motion.div>

      {/* Direita */}
      <motion.div
        className={`${styles.half} ${styles.right}`}
        initial={{ x: 0, rotate: 0 }}
        animate={{ x: 14, rotate: 12 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <img src={tape} alt="" />
      </motion.div>
    </div>
  );
}
