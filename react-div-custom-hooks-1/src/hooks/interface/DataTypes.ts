import { RefObject } from "react";

export interface PropTypes {
    contentEditableRef: RefObject<HTMLDivElement>
    setContent: (content: string) => void
}