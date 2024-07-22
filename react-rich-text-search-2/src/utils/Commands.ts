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
    CLOSE = "close",
    EMPTY = "empty",
    PDF_DOWNLOAD = "pdf",
}

export const CMD_MAP = new Map<string, CommandParameter>([
    [CMD.BACKCOLOR, {
        name: "Highlight Text",
        icon: "ink_highlighter",
        description: "Changes the document background color.",
        value: ""
    }],
    [CMD.UNDO, {
        name: "Undo",
        icon: "undo",
        description: "Undoes the last executed command.",
        value: ""
    }],
    [CMD.REDO, {
        name: "Redo",
        icon: "redo",
        description: "Redoes the previous undo command.",
        value: ""
    }],
    [CMD.EMPTY + "_1", {
        name: "Empty",
        icon: "",
        description: "Empty Separator.",
        value: ""
    }],
    [CMD.BOLD, {
        name: "Bold",
        icon: "format_bold",
        description: "Toggles bold on/off for the selection.",
        value: ""
    }],
    [CMD.ITALICS, {
        name: "Italic",
        icon: "format_italic",
        description: "Toggles italics on/off for the selection.",
        value: ""
    }],
    [CMD.UNDERLINE, {
        name: "Underline",
        icon: "format_underlined",
        description: "Toggles underline on/off for the selection.",
        value: ""
    }],
    [CMD.EMPTY + "_2", {
        name: "Empty",
        icon: "",
        description: "Empty Separator.",
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
        description: "Cuts the current selection and copies it to the clipboard.",
        value: ""
    }],
    [CMD.EMPTY + "_3", {
        name: "Empty",
        icon: "",
        description: "Empty Separator.",
        value: ""
    }],
    [CMD.CREATE_LINK, {
        name: "Create Link",
        icon: "link",
        description: "Creates an anchor link from the selection.",
        value: ""
    }],
    [CMD.UNLINK, {
        name: "Unlink",
        icon: "link_off",
        description: "Removes the anchor tag from a selected anchor link.",
        value: ""
    }],
    [CMD.PARA_SEPARATOR, {
        name: "Paragraph Separator",
        icon: "safety_divider",
        description: "Paragraph Separator",
        value: ""
    }],
    [CMD.EMPTY + "_4", {
        name: "Empty",
        icon: "",
        description: "Empty Separator.",
        value: ""
    }],
    [CMD.FONTNAME, {
        name: "Font Name",
        icon: "",
        description: "Changes the font name for the selection.",
        value: ""
    }],
    [CMD.FONTSIZE, {
        name: "Font Size",
        icon: "",
        description: "Changes the font size.",
        value: ""
    }],
    [CMD.FORECOLOR, {
        name: "FontColor",
        icon: "format_color_text",
        description: "Changes a font color.",
        value: ""
    }],
    [CMD.EMPTY + "_9", {
        name: "Empty",
        icon: "",
        description: "Empty Separator.",
        value: ""
    }],
    [CMD.FORMATBLOCK, {
        name: "Format Block",
        icon: "integration_instructions",
        description: "Adds an HTML block-style tag around the line containing the current selection.",
        value: ""
    }],
    [CMD.INSERT_HORIZONTAL_RULE, {
        name: "Insert Horizontal Rule",
        icon: "horizontal_rule",
        description: "Inserts a horizontal rule.",
        value: ""
    }],
    [CMD.INSERT_IMAGE, {
        name: "Insert Image",
        icon: "image",
        description: "Inserts an image.",
        value: ""
    }],
    [CMD.INSERT_LINE_BREAK, {
        name: "Insert Line Break",
        icon: "subject",
        description: "Inserts a line break.",
        value: ""
    }],
    [CMD.INSERT_ORDERED_LIST, {
        name: "Insert Ordered List",
        icon: "format_list_numbered",
        description: "Creates a numbered ordered list.",
        value: ""
    }],
    [CMD.INSERT_UNORDERED_LIST, {
        name: "Unordered List",
        icon: "format_list_bulleted",
        description: "Creates a bulleted unordered list.",
        value: ""
    }],
    [CMD.INSERT_PARAGRAPH, {
        name: "Insert Paragraph",
        icon: "format_paragraph",
        description: "Inserts a paragraph.",
        value: ""
    }],
    [CMD.INSERT_TEXT, {
        name: "Insert Text",
        icon: "text_snippet",
        description: "Inserts the given plain text.",
        value: ""
    }],
    [CMD.EMPTY + "_5", {
        name: "Empty",
        icon: "",
        description: "Empty Separator.",
        value: ""
    }],
    [CMD.JUSTIFY_LEFT, {
        name: "Justify Left",
        icon: "format_align_left",
        description: "Justifies the selection point to the left.",
        value: ""
    }],
    [CMD.JUSTIFY_CENTER, {
        name: "Justify Center",
        icon: "format_align_center",
        description: "Centers the selection.",
        value: ""
    }],
    [CMD.JUSTIFY_RIGHT, {
        name: "Justify Right",
        icon: "format_align_right",
        description: "Justifies the selection point to the right.",
        value: ""
    }],
    [CMD.JUSTIFY_FULL, {
        name: "Justify Full",
        icon: "format_align_justify",
        description: "Justifies the selection.",
        value: ""
    }],
    [CMD.EMPTY + "_6", {
        name: "Empty",
        icon: "",
        description: "Empty Separator.",
        value: ""
    }],
    [CMD.INDENT, {
        name: "Indent",
        icon: "format_indent_increase",
        description: "Indents the line containing the selection.",
        value: ""
    }],  
    [CMD.OUTDENT, {
        name: "Outdent",
        icon: "format_indent_decrease",
        description: "Outdents the line containing the selection.",
        value: ""
    }],   
    [CMD.REMOVE_FORMAT, {
        name: "Remove Format",
        icon: "clear_all",
        description: "Removes all formatting from the current selection.",
        value: ""
    }],
    [CMD.SELECT_ALL, {
        name: "Select All",
        icon: "select_all",
        description: "Selects all of the content of the editable region.",
        value: ""
    }],
    [CMD.EMPTY + "_7", {
        name: "Empty",
        icon: "",
        description: "Empty Separator.",
        value: ""
    }],
    [CMD.STRIKE_THRU, {
        name: "Strike Thru",
        icon: "strikethrough_s",
        description: "Toggles strikethrough on/off.",
        value: ""
    }],
    [CMD.SUBSCRIPT, {
        name: "Subscript",
        icon: "subscript",
        description: "Toggles subscript on/off.",
        value: ""
    }],
    [CMD.SUPERSCRIPT, {
        name: "Superscript",
        icon: "superscript",
        description: "Toggles superscript on/off.",
        value: ""
    }],
    [CMD.EMPTY + "_8", {
        name: "Empty",
        icon: "",
        description: "Empty Separator.",
        value: ""
    }],
    [CMD.FORWARD_DELETE, {
        name: "Forward Delete",
        icon: "scan_delete",
        description: "Deletes the character ahead of the cursor's position.",
        value: ""
    }],
    [CMD.DELETE, {
        name: "Delete",
        icon: "delete",
        description: "Deletes the current selection.",
        value: ""
    }],
    [CMD.EMPTY + "_8", {
        name: "Empty",
        icon: "",
        description: "Empty Separator.",
        value: ""
    }],
    [CMD.PDF_DOWNLOAD, {
        name: "Delete",
        icon: "download",
        description: "Downloads PDF file.",
        value: ""
    }],
]);