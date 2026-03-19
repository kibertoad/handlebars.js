import handlebars from './handlebars.js';
import _parser from '@handlebars/parser';
const { PrintVisitor, print } = _parser;

handlebars.PrintVisitor = PrintVisitor;
handlebars.print = print;

export default handlebars;
