import { CommandParameter } from "../hooks/util/DataFiles";

export enum CMD {
    BACKCOLOR = "backColor",
    BOLD = "bold",
    CREATE_LINK= "createLink",
    CUT = "cut",
    COPY = "copy",
    PASTE = "paste",
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
    JUSTIFY_CENTER = "justifyCenter",
    JUSTIFY_FULL = "justifyFull",
    JUSTIFY_LEFT = "justifyLeft",
    JUSTIFY_RIGHT = "justifyRight",
    OUTDENT = "outdent",
    UNDO = "undo",
    REDO = "redo",
    SELECT_ALL = "selectAll",
    STRIKE_THRU = "strikethrough",
    STYLE_WITH_CSS = "styleWithCss",
    SUBSCRIPT = "subscript",
    SUPERSCRIPT = "superscript",
    UNLINK = "unlink",
    USE_CSS = "useCSS",
}

export const CMD_MAP = new Map<string, CommandParameter>([
    [CMD.BACKCOLOR, {
        name: "BackColor",
        icon: "h1",
        description: "Heading H1",
        value: "red"
    }],
    [CMD.BOLD, {
        name: "Bold",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.CREATE_LINK, {
        name: "Create Link",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.CUT, {
        name: "Cut",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.COPY, {
        name: "Copy",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.PASTE, {
        name: "Paste",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.PARA_SEPARATOR, {
        name: "Paragraph Separator",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.DELETE, {
        name: "Delete",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.FONTNAME, {
        name: "Font Name",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.FONTSIZE, {
        name: "Font Size",
        icon: "h1",
        description: "Heading H1",
        value: 12
    }],
    [CMD.FORECOLOR, {
        name: "ForeColor",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.FORMATBLOCK, {
        name: "Clear All",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.FORWARD_DELETE, {
        name: "Forward Delete",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.INSERT_HORIZONTAL_RULE, {
        name: "Insert Horizontal Rule",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.INSERT_HTML, {
        name: "Insert HTML",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.INSERT_IMAGE, {
        name: "Insert Image",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.INSERT_LINE_BREAK, {
        name: "Insert Line Break",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.INSERT_ORDERED_LIST, {
        name: "Insert Ordered List",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.INSERT_PARAGRAPH, {
        name: "Insert Paragraph",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.INSERT_TEXT, {
        name: "Insert Text",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.INSERT_UNORDERED_LIST, {
        name: "Unordered List",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.JUSTIFY_CENTER, {
        name: "Justify Center",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.JUSTIFY_FULL, {
        name: "Justify Full",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.JUSTIFY_LEFT, {
        name: "Justify Left",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.JUSTIFY_RIGHT, {
        name: "Justify Right",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.OUTDENT, {
        name: "Outdent",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.UNDO, {
        name: "Undo",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.REDO, {
        name: "Redo",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.SELECT_ALL, {
        name: "Select All",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.STRIKE_THRU, {
        name: "Strike Thru",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.STYLE_WITH_CSS, {
        name: "Style With CSS",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.SUBSCRIPT, {
        name: "Subscript",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.SUPERSCRIPT, {
        name: "Superscript",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.UNLINK, {
        name: "Unlink",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],
    [CMD.USE_CSS, {
        name: "Use CSS",
        icon: "h1",
        description: "Heading H1",
        value: "h1"
    }],   
]);

// export const FONT_TYPES_MAP = new Map<string, string>([
//     [FontTypes.HEADING_H1, 'h1'],
//     [FontTypes.HEADING_H2, 'h2'],
//     [FontTypes.HEADING_H3, 'h3'],
//     [FontTypes.HEADING_H4, 'h4'],
//     [FontTypes.HEADING_H5, 'h5'],
//     [FontTypes.HEADING_H6, 'h6'],
//     [FontTypes.PARAGRAPH, 'p'],
//     [FontTypes.ITALICS, 'i'],
//     [FontTypes.BOLD, 'strong'],
//     [FontTypes.UNDERLINE, 'u'],
//     [FontTypes.STRIKETHRU, 's'],
// ]);