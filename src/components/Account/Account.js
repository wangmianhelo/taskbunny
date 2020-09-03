import React from 'react';
import styles from './Account.module.css'

function Account() {
    return (
        <div className={styles.account__container}>
            <h2 className={styles.account__title}>My details</h2>
            <div className={styles.avatar__row}>
                <div className={styles.avatar}></div>
                <label className={styles.myfile}>Upload photo<input type="file" id="myFile" name="filename" /></label>
                <div className={styles.myfile__text}>size no more than 2MB, png/jpeg...</div>
            </div>
            <div className={styles.first__row}>
                <div>First name:<input type="text"/></div>
                <div>Last name:<input type="text"/></div>
                <div>Mobile number:<input type="text"/></div>
            </div>
            <div className={styles.second__row}>
                <div>Email:<input type="text"/></div>
                <div>Location:<input type="text"/></div>
            </div>
            <div className={styles.third__row}>
                <div>ABN:<input type="text"/></div>
                <div>Company Name:<input type="text"/></div>
            </div>
            <button className={styles.submit}>Save</button>
        </div>
    );
}

export default Account;
