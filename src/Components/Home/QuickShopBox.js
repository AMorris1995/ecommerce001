import classes from "./QuickShopBox.module.scss";

export default function QuickShopBox(props) {
    return (
        <div className={classes.QuickShopBox}>
            <img src="https://cdn.media.amplience.net/i/currysprod/top-cat-washing-machine?fmt=webp&qlt=80" />
            <p>{props.children}</p>
        </div>
    );
}
