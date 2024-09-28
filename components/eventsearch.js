import { useRef } from "react";
import Button from "./ui/button";
import classes from './eventsearch.module.css';

function EventSearch(props){
    const yearInput = useRef();
    const monthInput = useRef();
    function submithandler(event){
        event.preventDefault();

        const selectedyear = yearInput.current.value;
        const selectedmonth = monthInput.current.value;

        props.onSearch(selectedyear, selectedmonth);
    }

    return(
        <>
        <form className={classes.form} onSubmit={submithandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">year</label>
                    <select id="year" ref={yearInput}>
                        <option value={'2021'}>2021</option>
                        <option value={'2022'}>2022</option>
                        <option value={'2023'}>2023</option>
                        <option value={'2024'}>2024</option>
                        <option value={'2025'}>2025</option>
                        <option value={'2026'}>2026</option>
                        <option value={'2027'}>2027</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="months">Months</label>
                    <select id="month" ref={monthInput}>
                        <option value={'1'}>January</option>
                        <option value={'2'}>fabuary</option>
                        <option value={'3'}>March</option>
                        <option value={'4'}>April</option>
                        <option value={'5'}>May</option>
                        <option value={'6'}>June</option>
                        <option value={'7'}>July</option>
                        <option value={'8'}>August</option>
                        <option value={'9'}>September</option>
                        <option value={'10'}>Octuber</option>
                        <option value={'11'}>November</option>
                        <option value={'12'}>December</option>
                    </select>
                </div>
            </div>
            <Button>find events</Button>
        </form>
        </>
    )
}
export default EventSearch;