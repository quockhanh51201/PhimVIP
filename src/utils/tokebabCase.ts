import { remove as removeDiacritics } from 'diacritics';
function toKebabCase(str: string): string {
    return removeDiacritics(str)
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}
export default toKebabCase
