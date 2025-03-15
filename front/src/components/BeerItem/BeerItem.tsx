import React, { FC, useCallback } from "react";

import styles from "./BeerItem.module.scss";
import { Rate } from "./Rate/Rate";
import { BeerItemProps } from "./BeerItem.model";

export const BeerItem: FC<BeerItemProps> = ({ beer: { name, ibu, score, uuid }, rateBeer }) => {

  const onRate = useCallback((score: number) => {
    rateBeer(uuid, score)
  }, []);


  return <div className={styles.beerItem}>
    <div className={styles.name}>{name}</div>
    <div className={styles.ibu}>IBU: {ibu}</div>
    <div className={styles.score}>Score: {score.toPrecision(1)}</div>
    <div className={styles.rate}>
      <Rate onRate={onRate}/>
    </div>
  </div>
};
