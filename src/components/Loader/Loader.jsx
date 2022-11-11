import { Pending } from "components/Loader/Loader.styled";
import { ImSpinner3 } from "react-icons/im";

export const Loader = () => {
    return (
        <Pending><ImSpinner3 /></Pending>
    );

}