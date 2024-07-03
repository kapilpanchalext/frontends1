export enum FontTypes {
    HEADING_H1 = 'heading1',
    HEADING_H2 = 'heading2',
    HEADING_H3 = 'heading3',
    HEADING_H4 = 'heading4',
    HEADING_H5 = 'heading5',
    HEADING_H6 = 'heading6',
    PARAGRAPH = 'paragraph',
    ITALICS = 'italics',
    BOLD = 'bold',
    UNDERLINE = 'u',
    STRIKETHRU = 'strike',
  }

export const FONT_TYPES_MAP = new Map<string, string>([
    [FontTypes.HEADING_H1, 'h1'],
    [FontTypes.HEADING_H2, 'h2'],
    [FontTypes.HEADING_H3, 'h3'],
    [FontTypes.HEADING_H4, 'h4'],
    [FontTypes.HEADING_H5, 'h5'],
    [FontTypes.HEADING_H6, 'h6'],
    [FontTypes.PARAGRAPH, 'p'],
    [FontTypes.ITALICS, 'i'],
    [FontTypes.BOLD, 'strong'],
    [FontTypes.UNDERLINE, 'u'],
    [FontTypes.STRIKETHRU, 's'],
]);