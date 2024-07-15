import { CommandParameter } from "../hooks/util/DataFiles";
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
        icon: "highlight",
        description: "Heading H1",
        value: ""
    }],
    [CMD.BOLD, {
        name: "Bold",
        icon: "format_bold",
        description: "Heading H1",
        value: ""
    }],
    [CMD.UNDERLINE, {
        name: "Underline",
        icon: "format_underlined",
        description: "Heading H1",
        value: ""
    }],
    [CMD.ITALICS, {
        name: "Italic",
        icon: "format_italic",
        description: "Heading H1",
        value: ""
    }],
    [CMD.CREATE_LINK, {
        name: "Create Link",
        icon: "link",
        description: "Heading H1",
        value: ""
    }],
    [CMD.CUT, {
        name: "Cut",
        icon: "content_cut",
        description: "Heading H1",
        value: ""
    }],
    [CMD.COPY, {
        name: "Copy",
        icon: "content_copy",
        description: "Heading H1",
        value: ""
    }],
    [CMD.PARA_SEPARATOR, {
        name: "Paragraph Separator",
        icon: "safety_divider",
        description: "Heading H1",
        value: ""
    }],
    [CMD.DELETE, {
        name: "Delete",
        icon: "delete",
        description: "Heading H1",
        value: ""
    }],
    [CMD.FONTNAME, {
        name: "Font Name",
        icon: "",
        description: "Heading H1",
        value: ""
    }],
    [CMD.FONTSIZE, {
        name: "Font Size",
        icon: "",
        description: "Heading H1",
        value: ""
    }],
    [CMD.FORECOLOR, {
        name: "FontColor",
        icon: "format_color_text",
        description: "Heading H1",
        value: ""
    }],
    [CMD.FORMATBLOCK, {
        name: "Clear All",
        icon: "clear_all",
        description: "Heading H1",
        value: ""
    }],
    [CMD.FORWARD_DELETE, {
        name: "Forward Delete",
        icon: "backspace",
        description: "Heading H1",
        value: ""
    }],
    [CMD.INSERT_HORIZONTAL_RULE, {
        name: "Insert Horizontal Rule",
        icon: "horizontal_rule",
        description: "Heading H1",
        value: ""
    }],
    [CMD.INDENT, {
        name: "Indent",
        icon: "format_indent_increase",
        description: "Heading H1",
        value: ""
    }],
    [CMD.INSERT_IMAGE, {
        name: "Insert Image",
        icon: "image",
        description: "Heading H1",
        value: ""
    }],
    [CMD.INSERT_LINE_BREAK, {
        name: "Insert Line Break",
        icon: "subject",
        description: "Heading H1",
        value: ""
    }],
    [CMD.INSERT_ORDERED_LIST, {
        name: "Insert Ordered List",
        icon: "format_list_numbered",
        description: "Heading H1",
        value: ""
    }],
    [CMD.INSERT_PARAGRAPH, {
        name: "Insert Paragraph",
        icon: "assignment",
        description: "Heading H1",
        value: ""
    }],
    [CMD.INSERT_TEXT, {
        name: "Insert Text",
        icon: "note_alt",
        description: "Heading H1",
        value: ""
    }],
    [CMD.INSERT_UNORDERED_LIST, {
        name: "Unordered List",
        icon: "format_list_bulleted",
        description: "Heading H1",
        value: ""
    }],
    [CMD.JUSTIFY_CENTER, {
        name: "Justify Center",
        icon: "format_align_center",
        description: "Heading H1",
        value: ""
    }],
    [CMD.JUSTIFY_FULL, {
        name: "Justify Full",
        icon: "format_align_justify",
        description: "Heading H1",
        value: ""
    }],
    [CMD.JUSTIFY_LEFT, {
        name: "Justify Left",
        icon: "format_align_left",
        description: "Heading H1",
        value: ""
    }],
    [CMD.JUSTIFY_RIGHT, {
        name: "Justify Right",
        icon: "format_align_right",
        description: "Heading H1",
        value: ""
    }],
    [CMD.OUTDENT, {
        name: "Outdent",
        icon: "format_indent_decrease",
        description: "Heading H1",
        value: ""
    }],
    [CMD.UNDO, {
        name: "Undo",
        icon: "undo",
        description: "Heading H1",
        value: ""
    }],
    [CMD.REDO, {
        name: "Redo",
        icon: "redo",
        description: "Heading H1",
        value: ""
    }],
    [CMD.REMOVE_FORMAT, {
        name: "Remove Format",
        icon: "clear_all",
        description: "Remove Format",
        value: ""
    }],
    [CMD.SELECT_ALL, {
        name: "Select All",
        icon: "select_all",
        description: "Heading H1",
        value: ""
    }],
    [CMD.STRIKE_THRU, {
        name: "Strike Thru",
        icon: "strikethrough_s",
        description: "Heading H1",
        value: ""
    }],
    [CMD.SUBSCRIPT, {
        name: "Subscript",
        icon: "subscript",
        description: "Heading H1",
        value: ""
    }],
    [CMD.SUPERSCRIPT, {
        name: "Superscript",
        icon: "superscript",
        description: "Heading H1",
        value: ""
    }],
    [CMD.UNLINK, {
        name: "Unlink",
        icon: "link_off",
        description: "Heading H1",
        value: ""
    }],
    [CMD.CLOSE, {
        name: "close",
        icon: "close",
        description: "Heading H1",
        value: ""
    }],
]);