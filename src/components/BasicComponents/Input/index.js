import React from "react";
import styles from "./styles.module.scss";
import SearchIcon from "assets/NavIcons/search.png";
import CloseIcon from "assets/AddressDrawer/close.png";

export default function Input(props) {
    const clearSearch = () => {
        props.onChange("");
    };
    return (
        <div className={styles["custom-input-box"]}>
            {props?.searchIcon && (
                <div className={styles["custom-input-search-icon"]}>
                    <img src={SearchIcon} alt="search" />
                </div>
            )}
            <input
                type={props.type}
                placeholder={props.placeholder}
                onChange={(e) => props.onChange(e.target.value)}
                value={props.value}
            />

            {props?.value?.length > 0 &&
                (props.clearType === "text" ? (
                    <span
                        className={styles["custom-input-clear-text"]}
                        onClick={clearSearch}
                    >
                        Clear
                    </span>
                ) : (
                    <span
                        className={styles["custom-input-clear-icon"]}
                        onClick={clearSearch}
                    >
                        <img src={CloseIcon} alt="close" />
                    </span>
                ))}
            {props.children}
        </div>
    );
}
