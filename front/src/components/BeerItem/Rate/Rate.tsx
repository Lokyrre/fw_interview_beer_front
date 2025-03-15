import React from "react";

import styles from "./Rate.module.scss";
export const Rate = ({ onRate }: {onRate: (score: number) => void}) => (
  <div className={styles.rate}>
    <button onClick={() => onRate(10)} className={styles.inLove} aria-label="In Love" />
    <button onClick={() => onRate(5)} className={styles.happy} aria-label="Happy" />
    <button onClick={() => onRate(1)} className={styles.sad} aria-label="sad"/>
  </div>
);
