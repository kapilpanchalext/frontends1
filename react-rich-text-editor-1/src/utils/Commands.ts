import { CommandParameter } from "../hooks/util/DataFiles";
import { faFortAwesome } from "@fortawesome/free-brands-svg-icons";

export enum CMD {
    BACKCOLOR = "backColor",
    BOLD = "bold",
    CREATE_LINK= "createLink",
    CUT = "cut",
    COPY = "copy",
    PARA_SEPARATOR = "defaultParagraphSeparator",
    DELETE = "delete",
    FONTNAME = "fontName",
    FONTSIZE = "fontSize",
    FORECOLOR = "foreColor",
    FORMATBLOCK = "formatBlock",
    FORWARD_DELETE = "forwardDelete",
    INSERT_HORIZONTAL_RULE = "insertHorizontalRule",
    INSERT_HTML = "insertHTML",
    INSERT_IMAGE = "insertImage",
    INSERT_LINE_BREAK = "insertLineBreak",
    INSERT_ORDERED_LIST = "insertOrderedList",
    INSERT_PARAGRAPH = "insertParagraph",
    INSERT_TEXT = "insertText",
    INSERT_UNORDERED_LIST = "insertUnorderedList",
    INDENT = "indent",
    ITALICS = "italic",
    JUSTIFY_CENTER = "justifyCenter",
    JUSTIFY_FULL = "justifyFull",
    JUSTIFY_LEFT = "justifyLeft",
    JUSTIFY_RIGHT = "justifyRight",
    OUTDENT = "outdent",
    UNDO = "undo",
    REDO = "redo",
    REMOVE_FORMAT = "removeFormat",
    SELECT_ALL = "selectAll",
    STRIKE_THRU = "strikethrough",
    STYLE_WITH_CSS = "styleWithCss",
    SUBSCRIPT = "subscript",
    SUPERSCRIPT = "superscript",
    UNLINK = "unlink",
    UNDERLINE = "underline",
    CLOSE = "close"
}

export const CMD_MAP = new Map<string, CommandParameter>([
    [CMD.BACKCOLOR, {
        name: "Highlight Text",
        icon: "faHighlighter",
        description: "Heading H1",
        value: ""
    }],
    [CMD.BOLD, {
        name: "Bold",
        icon: "faBold",
        description: "Heading H1",
        value: ""
    }],
    [CMD.UNDERLINE, {
        name: "Underline",
        icon: "faUnderline",
        description: "Heading H1",
        value: ""
    }],
    [CMD.ITALICS, {
        name: "Italic",
        icon: "faItalic",
        description: "Heading H1",
        value: ""
    }],
    [CMD.CREATE_LINK, {
        name: "Create Link",
        icon: "faLink",
        description: "Heading H1",
        value: ""
    }],
    [CMD.CUT, {
        name: "Cut",
        icon: "faCut",
        description: "Heading H1",
        value: ""
    }],
    [CMD.COPY, {
        name: "Copy",
        icon: "faCopy",
        description: "Heading H1",
        value: ""
    }],
    [CMD.PARA_SEPARATOR, {
        name: "Paragraph Separator",
        icon: "faParagraph",
        description: "Heading H1",
        value: ""
    }],
    [CMD.DELETE, {
        name: "Delete",
        icon: "faDeleteLeft",
        description: "Heading H1",
        value: ""
    }],
    [CMD.FONTNAME, {
        name: "Font Name",
        icon: "h1",
        description: "Heading H1",
        value: ""
    }],
    [CMD.FONTSIZE, {
        name: "Font Size",
        icon: "h1",
        description: "Heading H1",
        value: ""
    }],
    [CMD.FORECOLOR, {
        name: "FontColor",
        icon: "faHighlighter",
        description: "Heading H1",
        value: ""
    }],
    [CMD.FORMATBLOCK, {
        name: "Clear All",
        icon: "faCut",
        description: "Heading H1",
        value: ""
    }],
    [CMD.FORWARD_DELETE, {
        name: "Forward Delete",
        icon: "faDeleteLeft",
        description: "Heading H1",
        value: ""
    }],
    [CMD.INSERT_HORIZONTAL_RULE, {
        name: "Insert Horizontal Rule",
        icon: "h1",
        description: "Heading H1",
        value: ""
    }],
    [CMD.INDENT, {
        name: "Indent",
        icon: "faIndent",
        description: "Heading H1",
        value: ""
    }],
    [CMD.INSERT_IMAGE, {
        name: "Insert Image",
        icon: "faImage",
        description: "Heading H1",
        value: ""
    }],
    [CMD.INSERT_LINE_BREAK, {
        name: "Insert Line Break",
        icon: "faCut",
        description: "Heading H1",
        value: ""
    }],
    [CMD.INSERT_ORDERED_LIST, {
        name: "Insert Ordered List",
        icon: "faList",
        description: "Heading H1",
        value: ""
    }],
    [CMD.INSERT_PARAGRAPH, {
        name: "Insert Paragraph",
        icon: "h1",
        description: "Heading H1",
        value: ""
    }],
    [CMD.INSERT_TEXT, {
        name: "Insert Text",
        icon: "h1",
        description: "Heading H1",
        value: ""
    }],
    [CMD.INSERT_UNORDERED_LIST, {
        name: "Unordered List",
        icon: "faList",
        description: "Heading H1",
        value: ""
    }],
    [CMD.JUSTIFY_CENTER, {
        name: "Justify Center",
        icon: "faAlignCenter",
        description: "Heading H1",
        value: ""
    }],
    [CMD.JUSTIFY_FULL, {
        name: "Justify Full",
        icon: "faAlignJustify",
        description: "Heading H1",
        value: ""
    }],
    [CMD.JUSTIFY_LEFT, {
        name: "Justify Left",
        icon: "faAlignLeft",
        description: "Heading H1",
        value: ""
    }],
    [CMD.JUSTIFY_RIGHT, {
        name: "Justify Right",
        icon: "faAlignRight",
        description: "Heading H1",
        value: ""
    }],
    [CMD.OUTDENT, {
        name: "Outdent",
        icon: "faOutdent",
        description: "Heading H1",
        value: ""
    }],
    [CMD.UNDO, {
        name: "Undo",
        icon: "faUndo",
        description: "Heading H1",
        value: ""
    }],
    [CMD.REDO, {
        name: "Redo",
        icon: "faRedo",
        description: "Heading H1",
        value: ""
    }],
    [CMD.REMOVE_FORMAT, {
        name: "Remove Format",
        icon: "faFortAwesome",
        description: "Remove Format",
        value: ""
    }],
    [CMD.SELECT_ALL, {
        name: "Select All",
        icon: "faSearch",
        description: "Heading H1",
        value: ""
    }],
    [CMD.STRIKE_THRU, {
        name: "Strike Thru",
        icon: "faStrikethrough",
        description: "Heading H1",
        value: ""
    }],
    [CMD.SUBSCRIPT, {
        name: "Subscript",
        icon: "faSubscript",
        description: "Heading H1",
        value: ""
    }],
    [CMD.SUPERSCRIPT, {
        name: "Superscript",
        icon: "faSuperscript",
        description: "Heading H1",
        value: ""
    }],
    [CMD.UNLINK, {
        name: "Unlink",
        icon: "faUnlink",
        description: "Heading H1",
        value: ""
    }],
    [CMD.CLOSE, {
        name: "close",
        icon: "faClose",
        description: "Heading H1",
        value: ""
    }],
]);