import styles from "./CopyToClipboard.module.css";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  showNotification: boolean;
}

const CopyNotification = ({ showNotification }: ModalProps) => {
  return (
    <div className={`${styles.motion_wrap}`}>
      <AnimatePresence>
        {showNotification && (
          <motion.div
            className={styles.notification}
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: 1, y: 350 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            Номер скопійовано в буфер обміну!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CopyNotification;