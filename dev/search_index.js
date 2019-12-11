var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#PrettyTables.jl-1",
    "page": "Home",
    "title": "PrettyTables.jl",
    "category": "section",
    "text": "CurrentModule = PrettyTables\nDocTestSetup = quote\n    using PrettyTables\nendThis package has the purpose to print data in matrices in a human-readable format. It was inspired in the functionality provided by ASCII Table Generator.(Image: )"
},

{
    "location": "#Requirements-1",
    "page": "Home",
    "title": "Requirements",
    "category": "section",
    "text": "Julia >= 1.0\nParameters >= 0.10.3\nTables >= 0.1.14"
},

{
    "location": "#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "julia> using Pkg\njulia> Pkg.add(\"PrettyTables\")"
},

{
    "location": "#Manual-outline-1",
    "page": "Home",
    "title": "Manual outline",
    "category": "section",
    "text": "Pages = [\n    \"man/usage.md\"\n    \"man/text_backend.md\"\n    \"man/html_backend.md\"\n    \"man/alignment.md\"\n    \"man/filters.md\"\n    \"man/formatter.md\"\n    \"man/text_examples.md\"\n    \"man/html_examples.md\"\n    \"lib/library.md\"\n]\nDepth = 2"
},

{
    "location": "man/usage/#",
    "page": "Usage",
    "title": "Usage",
    "category": "page",
    "text": ""
},

{
    "location": "man/usage/#Usage-1",
    "page": "Usage",
    "title": "Usage",
    "category": "section",
    "text": "CurrentModule = PrettyTables\nDocTestSetup = quote\n    using PrettyTables\nendThe following functions can be used to print data.function pretty_table([io::IO,] data[, header]; kwargs...) where {T1,T2}Print to io the data data with header header. If io is omitted, then it defaults to stdout. If header is empty, then it will be automatically filled with \"Col. i\" for the i-th column.The header can be a Vector or a Matrix. If it is a Matrix, then each row will be a header line. The first line is called header and the others are called sub-headers .The following types of data are currently supported:AbstractVector: any vector can be printed. In this case, the header must be a vector, where the first element is considered the header and the others are the sub-headers.\nAbstractMatrix: any matrix can be printed.\nTable: any object that complies with the API of Tables.jl is also supported and can be printed.\nDict: any Dict can be printed. In this case, the special keyword sortkeys can be used to select whether or not the user wants to print the dictionary with the keys sorted. If it is false, then the elements will be printed on the same order returned by the functions keys and values. Notice that this assumes that the keys are sortable, if they are not, then an error will be thrown.The user can select which back-end will be used to print the tables using the keyword argument backend. Currently, the following back-ends are supported:Text (backend = :text): prints the table in text mode. This is the default selection if the keyword backend is absent.\nHTML (backend = :html): prints the table in HTML.Each back-end defines its own configuration keywords that can be passed using kwargs. However, the following keywords are valid for all back-ends:alignment: Select the alignment of the columns (see the section Alignment).\nbackend: Select which back-end will be used to print the table. Notice that            the additional configuration in kwargs... depends on the selected            backend.\nfilters_row: Filters for the rows (see the section Filters).\nfilters_col: Filters for the columns (see the section Filters)."
},

{
    "location": "man/usage/#Examples-1",
    "page": "Usage",
    "title": "Examples",
    "category": "section",
    "text": "In the following, it is possible to see some examples for a quick start using the text back-end.julia> data = [1 2 3; 4 5 6];\n\njulia> pretty_table(data, [\"Column 1\", \"Column 2\", \"Column 3\"])\n┌──────────┬──────────┬──────────┐\n│ Column 1 │ Column 2 │ Column 3 │\n├──────────┼──────────┼──────────┤\n│        1 │        2 │        3 │\n│        4 │        5 │        6 │\n└──────────┴──────────┴──────────┘\n\njulia> pretty_table(data, [\"Column 1\" \"Column 2\" \"Column 3\"; \"A\" \"B\" \"C\"])\n┌──────────┬──────────┬──────────┐\n│ Column 1 │ Column 2 │ Column 3 │\n│        A │        B │        C │\n├──────────┼──────────┼──────────┤\n│        1 │        2 │        3 │\n│        4 │        5 │        6 │\n└──────────┴──────────┴──────────┘julia> dict = Dict(1 => \"Jan\", 2 => \"Feb\", 3 => \"Mar\", 4 => \"Apr\", 5 => \"May\", 6 => \"Jun\");\n\njulia> pretty_table(dict)\n┌───────┬────────┐\n│  Keys │ Values │\n│ Int64 │ String │\n├───────┼────────┤\n│     4 │    Apr │\n│     2 │    Feb │\n│     3 │    Mar │\n│     5 │    May │\n│     6 │    Jun │\n│     1 │    Jan │\n└───────┴────────┘\n\njulia> pretty_table(dict, sortkeys = true)\n┌───────┬────────┐\n│  Keys │ Values │\n│ Int64 │ String │\n├───────┼────────┤\n│     1 │    Jan │\n│     2 │    Feb │\n│     3 │    Mar │\n│     4 │    Apr │\n│     5 │    May │\n│     6 │    Jun │\n└───────┴────────┘\n"
},

{
    "location": "man/usage/#Helpers-1",
    "page": "Usage",
    "title": "Helpers",
    "category": "section",
    "text": "The macro @pt was created to make it easier to pretty print tables to stdout. Its signature is:macro pt(expr...)where the expression list expr contains the tables that should be printed like:@pt table1 table2 table3The user can select the table header by passing the expression::header = [<Vector with the header>]Notice that the header is valid only for the next printed table. Hence:    @pt :header = header1 table1 :header = header2 table2 table3will print table1 using header1, table2 using header2, and table3 using the default header.The global configurations used to print tables with the macro @pt can be selected by:macro ptconf(expr...)where expr format must be:keyword1 = value1 keyword2 = value2 ...The keywords can be any possible keyword that can be used in the function pretty_table.All the configurations can be reseted by calling @ptconfclean.warning: Warning\nIf a keyword is not supported by the function pretty_table, then no error message is printed when calling @ptconf. However, an error will be thrown when @pt is called.info: Info\nWhen more than one table is passed to the macro @pt, then multiple calls to pretty_table will occur. Hence, the cropping algorithm will behave exactly the same as printing the tables separately.julia> data = [1 2 3; 4 5 6];\n\njulia> @pt data\n┌────────┬────────┬────────┐\n│ Col. 1 │ Col. 2 │ Col. 3 │\n├────────┼────────┼────────┤\n│      1 │      2 │      3 │\n│      4 │      5 │      6 │\n└────────┴────────┴────────┘\n\njulia> @pt :header = [\"Column 1\", \"Column 2\", \"Column 3\"] data :header = [\"Column 1\" \"Column 2\" \"Column 3\"; \"A\" \"B\" \"C\"] data\n┌──────────┬──────────┬──────────┐\n│ Column 1 │ Column 2 │ Column 3 │\n├──────────┼──────────┼──────────┤\n│        1 │        2 │        3 │\n│        4 │        5 │        6 │\n└──────────┴──────────┴──────────┘\n┌──────────┬──────────┬──────────┐\n│ Column 1 │ Column 2 │ Column 3 │\n│        A │        B │        C │\n├──────────┼──────────┼──────────┤\n│        1 │        2 │        3 │\n│        4 │        5 │        6 │\n└──────────┴──────────┴──────────┘\n\njulia> @ptconf tf = ascii_dots alignment = :c\n\njulia> @pt data\n............................\n: Col. 1 : Col. 2 : Col. 3 :\n:........:........:........:\n:   1    :   2    :   3    :\n:   4    :   5    :   6    :\n:........:........:........:\n\njulia> @ptconfclean\n\njulia> @pt data\n┌────────┬────────┬────────┐\n│ Col. 1 │ Col. 2 │ Col. 3 │\n├────────┼────────┼────────┤\n│      1 │      2 │      3 │\n│      4 │      5 │      6 │\n└────────┴────────┴────────┘"
},

{
    "location": "man/text_backend/#",
    "page": "Text",
    "title": "Text",
    "category": "page",
    "text": ""
},

{
    "location": "man/text_backend/#Text-back-end-1",
    "page": "Text",
    "title": "Text back-end",
    "category": "section",
    "text": "CurrentModule = PrettyTables\nDocTestSetup = quote\n    using PrettyTables\nendThe following options are available when the text backend is used. Those can be passed as keywords when calling the function pretty_table:border_crayon: Crayon to print the border.\nheader_crayon: Crayon to print the header.\nsubheaders_crayon: Crayon to print sub-headers.\nrownum_header_crayon: Crayon for the header of the column with the row                         numbers.\ntext_crayon: Crayon to print default text.\nalignment: Select the alignment of the columns (see the section              Alignment).\nautowrap: If true, then the text will be wrapped on spaces to fit the             column. Notice that this function requires linebreaks = true and             the column must have a fixed size (see columns_width).\ncell_alignment: A dictionary of type (i,j) => a that overrides that                   alignment of the cell (i,j) to a regardless of the                   columns alignment selected. a must be a symbol like                   specified in the section Alignment.\ncolumns_width: A set of integers specifying the width of each column. If the                  width is equal or lower than 0, then it will be automatically                  computed to fit the large cell in the column. If it is                  a single integer, then this number will be used as the size                  of all columns. (Default = 0)\ncrop: Select the printing behavior when the data is bigger than the         available screen size (see screen_size). It can be :both to crop         on vertical and horizontal direction, :horizontal to crop only on         horizontal direction, :vertical to crop only on vertical direction,         or :none to do not crop the data at all.\nfilters_row: Filters for the rows (see the section Filters).\nfilters_col: Filters for the columns (see the section Filters).\nformatter: See the section Formatter.\nhighlighters: An instance of Highlighter or a tuple with a list of                 highlighters (see the section Text highlighters).\nhlines: A vector of Int indicating row numbers in which an additional           horizontal line should be drawn after the row. Notice that numbers           lower than 1 and equal or higher than the number of rows will be           neglected.\nhlines_format: A tuple of 4 characters specifying the format of the                  horizontal lines. The characters must be the left                  intersection, the middle intersection, the right                  intersection, and the row. If it is nothing, then it will                  use the same format specified in tf.                  (Default = nothing)\nlinebreaks: If true, then \\n will break the line inside the cells.               (Default = false)\nnoheader: If true, then the header will not be printed. Notice that all             keywords and parameters related to the header and sub-headers will             be ignored. (Default = false)\nnosubheader: If true, then the sub-header will not be printed, i.e. the                header will contain only one line. Notice that this option has                no effect if noheader = true. (Default = false)\nsame_column_size: If true, then all the columns will have the same size.                     (Default = false)\nscreen_size: A tuple of two integers that defines the screen size (num. of                rows, num. of columns) that is available to print the table. It                is used to crop the data depending on the value of the keyword                crop. If it is nothing, then the size will be obtained                automatically. Notice that if a dimension is not positive, then                it will be treated as unlimited. (Default = nothing)\nshow_row_number: If true, then a new column will be printed showing the                    row number. (Default = false)\ntf: Table format used to print the table (see the section       Text table formats). (Default = unicode)The keywords header_crayon and subheaders_crayon can be a Crayon or a Vector{Crayon}. In the first case, the Crayon will be applied to all the elements. In the second, each element can have its own crayon, but the length of the vector must be equal to the number of columns in the data."
},

{
    "location": "man/text_backend/#Crayons-1",
    "page": "Text",
    "title": "Crayons",
    "category": "section",
    "text": "A Crayon is an object that handles a style for text printed on terminals. It is defined in the package Crayons.jl. There are many options available to customize the style, such as foreground color, background color, bold text, etc.A Crayon can be created in two different ways:julia> Crayon(foreground = :blue, background = :black, bold = :true)\n\njulia> crayon\"blue bg:black bold\"For more information, see the Crayon.jl documentation.info: Info\nThe Crayon.jl package is re-exported by PrettyTables.jl. Hence, you do not need using Crayons to create a Crayon."
},

{
    "location": "man/text_backend/#Cropping-1",
    "page": "Text",
    "title": "Cropping",
    "category": "section",
    "text": "By default, the data will be cropped to fit the screen. This behavior can be changed by using the keyword crop.julia> data = Any[1    false      1.0     0x01 ;\n                  2     true      2.0     0x02 ;\n                  3    false      3.0     0x03 ;\n                  4     true      4.0     0x04 ;\n                  5    false      5.0     0x05 ;\n                  6     true      6.0     0x06 ;];\n\njulia> pretty_table(data, screen_size = (10,30))\n┌────────┬────────┬────────┬ ⋯\n│ Col. 1 │ Col. 2 │ Col. 3 │ ⋯\n├────────┼────────┼────────┼ ⋯\n│      1 │  false │    1.0 │ ⋯\n│      2 │   true │    2.0 │ ⋯\n│   ⋮    │   ⋮    │   ⋮    │ ⋯\n└────────┴────────┴────────┴ ⋯\n\njulia> pretty_table(data, screen_size = (10,30), crop = :none)\n┌────────┬────────┬────────┬────────┐\n│ Col. 1 │ Col. 2 │ Col. 3 │ Col. 4 │\n├────────┼────────┼────────┼────────┤\n│      1 │  false │    1.0 │      1 │\n│      2 │   true │    2.0 │      2 │\n│      3 │  false │    3.0 │      3 │\n│      4 │   true │    4.0 │      4 │\n│      5 │  false │    5.0 │      5 │\n│      6 │   true │    6.0 │      6 │\n└────────┴────────┴────────┴────────┘If the keyword screen_size is not specified (or is nothing), then the screen size will be obtained automatically. For files, screen_size = (-1,-1), meaning that no limit exits in both vertical and horizontal direction.note: Note\nIn vertical cropping, the header and the first table row is always printed.    note: Note\nThe highlighters will work even in partially printed data.If the user selects a fixed size for the columns (using the keyword columns_width), enables line breaks (using the keyword linebreaks), and sets autowrap = true, then the algorithm wraps the text on spaces to automatically fit the space.julia> data = [\"One very very very big long long line\"; \"Another very very very big big long long line\"];\n\njulia> pretty_table(data, columns_width = 10, autowrap = true, linebreaks = true, show_row_number = true)\n┌─────┬────────────┐\n│ Row │     Col. 1 │\n├─────┼────────────┤\n│   1 │   One very │\n│     │  very very │\n│     │   big long │\n│     │  long line │\n│   2 │    Another │\n│     │  very very │\n│     │   very big │\n│     │   big long │\n│     │  long line │\n└─────┴────────────┘"
},

{
    "location": "man/text_backend/#Text-highlighters-1",
    "page": "Text",
    "title": "Text highlighters",
    "category": "section",
    "text": "A highlighter of the text backend is an instance of the structure Highlighter that contains information about which elements a highlight style should be applied when using the text backend. The structure contains three fields:f: Function with the signature f(data,i,j) in which should return true      if the element (i,j) in data must be highlighted, or false      otherwise.\ncrayon: Crayon with the style of a highlighted element.The function f must have the following signature:f(data, i, j)in which data is a reference to the data that is being printed, i and j are the element coordinates that are being tested. If this function returns true, then the highlight style will be applied to the (i,j) element. Otherwise, the default style will be used.A set of highlighters can be passed as a Tuple to the highlighter keyword. Notice that if multiple highlighters are valid for the element (i,j), then the applied style will be equal to the first match considering the order in the Tuple highlighters.(Image: )If only a single highlighter is wanted, then it can be passed directly to the keyword highlighter of pretty_table without being inside a Tuple.(Image: )note: Note\nIf the highlighters are used together with Formatter, then the change in the format will not affect that parameter data passed to the highlighter function f. It will always receive the original, unformatted value.There are a set of pre-defined highlighters (with names hl_*) to make the usage simpler. They are defined in the file ./src/backends/text/predefined_highlighters.jl.To make the syntax less cumbersome, the following helper function is available:function Highlighter(f; kwargs...)It creates a Highlighter with the function f and pass all the keyword arguments kwargs to the Crayon. Hence, the following code:julia> Highlighter((data,i,j)->isodd(i), Crayon(bold = true, background = :dark_gray))can be replaced by:julia> Highlighter((data,i,j)->isodd(i); bold = true, background = :dark_gray)"
},

{
    "location": "man/text_backend/#Text-table-formats-1",
    "page": "Text",
    "title": "Text table formats",
    "category": "section",
    "text": "The following table formats are available when using the text back-end:unicode (Default)┌────────┬────────┬────────┬────────┐\n│ Col. 1 │ Col. 2 │ Col. 3 │ Col. 4 │\n├────────┼────────┼────────┼────────┤\n│      1 │  false │    1.0 │      1 │\n│      2 │   true │    2.0 │      2 │\n│      3 │  false │    3.0 │      3 │\n└────────┴────────┴────────┴────────┘ascii_dots.....................................\n: Col. 1 : Col. 2 : Col. 3 : Col. 4 :\n:........:........:........:........:\n:      1 :  false :    1.0 :      1 :\n:      2 :   true :    2.0 :      2 :\n:      3 :  false :    3.0 :      3 :\n:........:........:........:........:ascii_rounded.--------.--------.--------.--------.\n| Col. 1 | Col. 2 | Col. 3 | Col. 4 |\n:--------+--------+--------+--------:\n|      1 |  false |    1.0 |      1 |\n|      2 |   true |    2.0 |      2 |\n|      3 |  false |    3.0 |      3 |\n\'--------\'--------\'--------\'--------\'borderless  Col. 1   Col. 2   Col. 3   Col. 4\n\n       1    false      1.0        1\n       2     true      2.0        2\n       3    false      3.0        3compact -------- -------- -------- --------\n  Col. 1   Col. 2   Col. 3   Col. 4\n -------- -------- -------- --------\n       1    false      1.0        1\n       2     true      2.0        2\n       3    false      3.0        3\n -------- -------- -------- --------markdown| Col. 1 | Col. 2 | Col. 3 | Col. 4 |\n|--------|--------|--------|--------|\n|      1 |  false |    1.0 |      1 |\n|      2 |   true |    2.0 |      2 |\n|      3 |  false |    3.0 |      3 |mysql+--------+--------+--------+--------+\n| Col. 1 | Col. 2 | Col. 3 | Col. 4 |\n+--------+--------+--------+--------+\n|      1 |  false |    1.0 |      1 |\n|      2 |   true |    2.0 |      2 |\n|      3 |  false |    3.0 |      3 |\n+--------+--------+--------+--------+simple========= ======== ======== =========\n  Col. 1   Col. 2   Col. 3   Col. 4\n========= ======== ======== =========\n       1    false      1.0        1\n       2     true      2.0        2\n       3    false      3.0        3\n========= ======== ======== =========unicode_rounded╭────────┬────────┬────────┬────────╮\n│ Col. 1 │ Col. 2 │ Col. 3 │ Col. 4 │\n├────────┼────────┼────────┼────────┤\n│      1 │  false │    1.0 │      1 │\n│      2 │   true │    2.0 │      2 │\n│      3 │  false │    3.0 │      3 │\n╰────────┴────────┴────────┴────────╯note: Note\nThe format unicode_rounded should look awful on your browser, but it should be printed fine on your terminal.julia> data = Any[ f(a) for a = 0:15:90, f in (sind,cosd,tand)];\n\njulia> pretty_table(data, tf = ascii_dots)\n..................................................................\n:              Col. 1 :              Col. 2 :             Col. 3 :\n:.....................:.....................:....................:\n:                 0.0 :                 1.0 :                0.0 :\n: 0.25881904510252074 :  0.9659258262890683 : 0.2679491924311227 :\n:                 0.5 :  0.8660254037844386 : 0.5773502691896258 :\n:  0.7071067811865476 :  0.7071067811865476 :                1.0 :\n:  0.8660254037844386 :                 0.5 : 1.7320508075688772 :\n:  0.9659258262890683 : 0.25881904510252074 : 3.7320508075688776 :\n:                 1.0 :                 0.0 :                Inf :\n:.....................:.....................:....................:\n\njulia> pretty_table(data, tf = compact)\n --------------------- --------------------- --------------------\n               Col. 1                Col. 2               Col. 3\n --------------------- --------------------- --------------------\n                  0.0                   1.0                  0.0\n  0.25881904510252074    0.9659258262890683   0.2679491924311227\n                  0.5    0.8660254037844386   0.5773502691896258\n   0.7071067811865476    0.7071067811865476                  1.0\n   0.8660254037844386                   0.5   1.7320508075688772\n   0.9659258262890683   0.25881904510252074   3.7320508075688776\n                  1.0                   0.0                  Inf\n --------------------- --------------------- --------------------\nIt is also possible to define you own custom table by creating a new instance of the structure TextFormat. For example, let\'s say that you want a table like simple that does not print the bottom line:julia> data = Any[ f(a) for a = 0:15:90, f in (sind,cosd,tand)];\n\njulia> tf = TextFormat(simple, bottom_line = false);\n\njulia> pretty_table(data, tf = tf)\n====================== ===================== =====================\n               Col. 1                Col. 2               Col. 3\n====================== ===================== =====================\n                  0.0                   1.0                  0.0\n  0.25881904510252074    0.9659258262890683   0.2679491924311227\n                  0.5    0.8660254037844386   0.5773502691896258\n   0.7071067811865476    0.7071067811865476                  1.0\n   0.8660254037844386                   0.5   1.7320508075688772\n   0.9659258262890683   0.25881904510252074   3.7320508075688776\n                  1.0                   0.0                  Inf\nor that does not print the header line:julia> data = Any[ f(a) for a = 0:15:90, f in (sind,cosd,tand)];\n\njulia> tf = TextFormat(simple, header_line = false);\n\njulia> pretty_table(data, tf = tf)\n====================== ===================== =====================\n               Col. 1                Col. 2               Col. 3\n                  0.0                   1.0                  0.0\n  0.25881904510252074    0.9659258262890683   0.2679491924311227\n                  0.5    0.8660254037844386   0.5773502691896258\n   0.7071067811865476    0.7071067811865476                  1.0\n   0.8660254037844386                   0.5   1.7320508075688772\n   0.9659258262890683   0.25881904510252074   3.7320508075688776\n                  1.0                   0.0                  Inf\n====================== ===================== =====================For more information, see the documentation of the structure TextFormat."
},

{
    "location": "man/html_backend/#",
    "page": "HTML",
    "title": "HTML",
    "category": "page",
    "text": ""
},

{
    "location": "man/html_backend/#HTML-back-end-1",
    "page": "HTML",
    "title": "HTML back-end",
    "category": "section",
    "text": "CurrentModule = PrettyTables\nDocTestSetup = quote\n    using PrettyTables\nend<script language=\"javascript\" type=\"text/javascript\">\n function resizeIframe(obj)\n {\n   obj.style.height = obj.contentWindow.document.body.scrollHeight + 10 + \'px\';\n   obj.style.width = obj.contentWindow.document.body.scrollWidth + 100 + \'px\';\n }\n</script>The following options are available when the HTML backend is used. Those can be passed as keywords when calling the function pretty_table:cell_alignment: A dictionary of type (i,j) => a that overrides that                   alignment of the cell (i,j) to a regardless of the                   columns alignment selected. a must be a symbol like                   specified in the section Alignment.\nformatter: See the section Formatter.\nhighlighters: An instance of HTMLHighlighter or a tuple with a                 list of HTML highlighters (see the section HTML                 highlighters).\nlinebreaks: If true, then \\\\n will be replaced by <br>.               (Default = false)\nminimal: If true, then all HTML headers will be omitted, i.e. only the            code between <table> and </table> will be printed.            (Default = false)\nnoheader: If true, then the header will not be printed. Notice that all             keywords and parameters related to the header and sub-headers will             be ignored. (Default = false)\nnosubheader: If true, then the sub-header will not be printed, i.e. the                header will contain only one line. Notice that this option has                no effect if noheader = true. (Default = false)\nshow_row_number: If true, then a new column will be printed showing the                    row number. (Default = false)\ntf: An instance of the structure HTMLTableFormat that defines the       general format of the HTML table."
},

{
    "location": "man/html_backend/#HTML-highlighters-1",
    "page": "HTML",
    "title": "HTML highlighters",
    "category": "section",
    "text": "A set of highlighters can be passed as a Tuple to the highlighter keyword. Each highlighter is an instance of a structure that is a subtype of AbstractHTMLHighlighter. It also must also contain at least the following two fields to comply with the API:f: Function with the signature f(data,i,j) in which should return true      if the element (i,j) in data must be highlighter, or false      otherwise.\nfd: Function with the signature f(h,data,i,j) in which h is the       highlighter. This function must return the HTMLDecoration to be       applied to the cell that must be highlighted.The function f has the following signature:f(data, i, j)in which data is a reference to the data that is being printed, i and j are the element coordinates that are being tested. If this function returns true, then the highlight style will be applied to the (i,j) element. Otherwise, the default style will be used.Notice that if multiple highlighters are valid for the element (i,j), then the applied style will be equal to the first match considering the order in the Tuple highlighters.If the function f returns true, then the function fd(h,data,i,j) will be called and must return an element of type HTMLDecoration that contains the decoration to be applied to the cell.If only a single highlighter is wanted, then it can be passed directly to the keyword highlighter without being inside a Tuple.A default HTML highlighter HTMLHighlighter is available. It can be constructed using the following functions:HTMLHighlighter(f::Function, decoration::HTMLDecoration)\nHTMLHighlighter(f::Function, fd::Function)The first will apply a fixed decoration to the highlighted cell specified in decoration whereas the second let the user select the desired decoration by specifying the function fd.note: Note\nIf the highlighters are used together with Formatter, then the change in the format will not affect that parameter data passed to the highlighter function f. It will always receive the original, unformatted value.There are a set of pre-defined highlighters (with names hl_*) to make the usage simpler. They are defined in the file ./src/backends/html/predefined_highlighters.jl.julia> t = 0:1:20;\n\njulia> data = hcat(t, ones(length(t))*1, 1*t, 0.5.*t.^2);\n\njulia> header = [\"Time\" \"Acceleration\" \"Velocity\" \"Distance\";\n                  \"[s]\"       \"[m/s²]\"    \"[m/s]\"      \"[m]\"];\n\njulia> hl_v = HTMLHighlighter( (data,i,j)->(j == 3) && data[i,3] > 9, HTMLDecoration(color = \"blue\", font_weight = \"bold\"));\n\njulia> hl_p = HTMLHighlighter( (data,i,j)->(j == 4) && data[i,4] > 10, HTMLDecoration(color = \"red\"));\n\njulia> hl_e = HTMLHighlighter( (data,i,j)->data[i,1] == 10, HTMLDecoration(background = \"black\", color = \"white\"))\n\njulia> pretty_table(data, header, backend = :html, highlighters = (hl_e, hl_p, hl_v))<iframe src=\"html_highlighters_example.html\" frameborder=\"0\" scrolling=\"no\" onload=\"javascript:resizeIframe(this)\">\n  <p>Your browser does not support iframes. Click <a href=\"html_highlighters_example.html>here</a> to see the table.</p>\n</iframe>"
},

{
    "location": "man/html_backend/#HTML-table-formats-1",
    "page": "HTML",
    "title": "HTML table formats",
    "category": "section",
    "text": "The following table formats are available when using the html back-end:html_default (Default)<iframe src=\"html_format_default.html\" frameborder=\"0\" scrolling=\"no\" onload=\"javascript:resizeIframe(this)\">\n  <p>Your browser does not support iframes. Click <a href=\"html_format_default.html>here</a> to see the table.</p>\n</iframe>html_dark<iframe src=\"html_format_dark.html\" frameborder=\"0\" scrolling=\"no\" onload=\"javascript:resizeIframe(this)\">\n  <p>Your browser does not support iframes. Click <a href=\"html_format_dark.html>here</a> to see the table.</p>\n</iframe>html_minimalist<iframe src=\"html_format_minimalist.html\" frameborder=\"0\" scrolling=\"no\" onload=\"javascript:resizeIframe(this)\">\n  <p>Your browser does not support iframes. Click <a href=\"html_format_minimalist.html>here</a> to see the table.</p>\n</iframe>html_simple<iframe src=\"html_format_simple.html\" frameborder=\"0\" scrolling=\"no\" onload=\"javascript:resizeIframe(this)\">\n  <p>Your browser does not support iframes. Click <a href=\"html_format_simple.html>here</a> to see the table.</p>\n</iframe>"
},

{
    "location": "man/alignment/#",
    "page": "Alignment",
    "title": "Alignment",
    "category": "page",
    "text": ""
},

{
    "location": "man/alignment/#Alignment-1",
    "page": "Alignment",
    "title": "Alignment",
    "category": "section",
    "text": "CurrentModule = PrettyTables\nDocTestSetup = quote\n    using PrettyTables\nendThe keyword alignment can be a Symbol or a vector of Symbol.If it is a symbol, we have the following behavior::l or :L: the text of all columns will be left-aligned;\n:c or :C: the text of all columns will be center-aligned;\n:r or :R: the text of all columns will be right-aligned;\nOtherwise it defaults to :r.If it is a vector, then it must have the same number of symbols as the number of columns in data. The i-th symbol in the vector specify the alignment of the i-th column using the same symbols as described previously.julia> data = Any[ f(a) for a = 0:30:90, f in (sind,cosd,tand)];\n\njulia> pretty_table(data; alignment=:l)\n┌────────────────────┬────────────────────┬────────────────────┐\n│ Col. 1             │ Col. 2             │ Col. 3             │\n├────────────────────┼────────────────────┼────────────────────┤\n│ 0.0                │ 1.0                │ 0.0                │\n│ 0.5                │ 0.8660254037844386 │ 0.5773502691896258 │\n│ 0.8660254037844386 │ 0.5                │ 1.7320508075688772 │\n│ 1.0                │ 0.0                │ Inf                │\n└────────────────────┴────────────────────┴────────────────────┘\n\njulia> pretty_table(data; alignment=[:l,:c,:r])\n┌────────────────────┬────────────────────┬────────────────────┐\n│ Col. 1             │       Col. 2       │             Col. 3 │\n├────────────────────┼────────────────────┼────────────────────┤\n│ 0.0                │        1.0         │                0.0 │\n│ 0.5                │ 0.8660254037844386 │ 0.5773502691896258 │\n│ 0.8660254037844386 │        0.5         │ 1.7320508075688772 │\n│ 1.0                │        0.0         │                Inf │\n└────────────────────┴────────────────────┴────────────────────┘note: Note\nThe alignment keyword is supported in all back-ends."
},

{
    "location": "man/filters/#",
    "page": "Filters",
    "title": "Filters",
    "category": "page",
    "text": ""
},

{
    "location": "man/filters/#Filters-1",
    "page": "Filters",
    "title": "Filters",
    "category": "section",
    "text": "CurrentModule = PrettyTables\nDocTestSetup = quote\n    using PrettyTables\nendIt is possible to specify filters to filter the data that will be printed. There are two types of filters: the row filters, which are specified by the keyword filters_row, and the column filters, which are specified by the keyword filters_col.The filters are a tuple of functions that must have the following signature:f(data,i)::Boolin which data is a pointer to the matrix that is being printed and i is the i-th row in the case of the row filters or the i-th column in the case of column filters. If this function returns true for i, then the i-th row (in case of filters_row) or the i-th column (in case of filters_col) will be printed. Otherwise, it will be omitted.A set of filters can be passed inside of a tuple. Notice that, in this case, all filters for a specific row or column must be return true so that it can be printed, i.e the set of filters has an AND logic.If the keyword is set to nothing, which is the default, then no filtering will be applied to the row and/or column.note: Note\nThe filters do not change the row and column numbering for the others modifiers such as column width specification, formatters, and highlighters. Thus, for example, if only the 4-th row is printed, then it will also be referenced inside the formatters and highlighters as 4 instead of 1."
},

{
    "location": "man/filters/#Example-1",
    "page": "Filters",
    "title": "Example",
    "category": "section",
    "text": "Given a matrix data, let\'s suppose that is desired to print:only the 5-th and 6-th column; and\nonly the rows in which the 5-th and 6-th columns are positive.Then we can use one of the following approaches:f_c(data,i)  = i in (5,6)\nf_r1(data,i) = data[i,5] >= 0\nf_r2(data,i) = data[i,6] >= 0and set filters_col = (f_c,) and filters_row = (f_r1,f_r2), orf_c(data,i) = i in (5,6)\nf_r(data,i) = (data[i,5] >= 0) && (data[i,6] >= 0)and set filters_col = (f_c,) and filters_row = (f_r,).note: Note\nThe keywords related to the filters are supported in all back-ends."
},

{
    "location": "man/formatter/#",
    "page": "Formatters",
    "title": "Formatters",
    "category": "page",
    "text": ""
},

{
    "location": "man/formatter/#Formatter-1",
    "page": "Formatters",
    "title": "Formatter",
    "category": "section",
    "text": "CurrentModule = PrettyTables\nDocTestSetup = quote\n    using PrettyTables\nendThe keyword formatter can be used to pass functions to format the values in the columns. It must be a Dict{Number,Function}(). The key indicates the column number in which its elements will be converted by the function in the value of the dictionary. The function must have the following signature:f(value, i)in which value is the data and i is the row number. It must return the formatted value.For example, if we want to multiply all values in odd rows of the column 2 by π, then the formatter should look like:Dict(2 => (v,i)->isodd(i) ? v*π : v)If the key 0 is present, then the corresponding function will be applied to all columns that does not have a specific key.julia> data = Any[ f(a) for a = 0:30:90, f in (sind,cosd,tand)];\n\njulia> formatter = Dict(0 => (v,i) -> round(v,digits=3));\n\njulia> pretty_table(data; formatter=formatter)\n┌────────┬────────┬────────┐\n│ Col. 1 │ Col. 2 │ Col. 3 │\n├────────┼────────┼────────┤\n│    0.0 │    1.0 │    0.0 │\n│    0.5 │  0.866 │  0.577 │\n│  0.866 │    0.5 │  1.732 │\n│    1.0 │    0.0 │    Inf │\n└────────┴────────┴────────┘There are a set of pre-defined formatters (with names ft_*) to make the usage simpler. They are defined in the file ./src/predefined_formatter.jl.function ft_printf(ftv_str, [columns])Apply the formats ftv_str (see @sprintf) to the elements in the columns columns.If ftv_str is a Vector, then columns must be also be a Vector with the same number of elements. If ftv_str is a String, and columns is not specified (or is empty), then the format will be applied to the entire table. Otherwise, if ftv_str is a String and columns is a Vector, then the format will be applied only to the columns in columns.note: Note\nThis formatter will be applied only to the cells that are of type Number. The other types of cells will be left untouched.julia> data = Any[ f(a) for a = 0:30:90, f in (sind,cosd,tand)];\n\njulia> pretty_table(data; formatter=ft_printf(\"%5.3f\"))\n┌────────┬────────┬────────┐\n│ Col. 1 │ Col. 2 │ Col. 3 │\n├────────┼────────┼────────┤\n│  0.000 │  1.000 │  0.000 │\n│  0.500 │  0.866 │  0.577 │\n│  0.866 │  0.500 │  1.732 │\n│  1.000 │  0.000 │    Inf │\n└────────┴────────┴────────┘\n\njulia> pretty_table(data; formatter=ft_printf(\"%5.3f\", [1,3]))\n┌────────┬────────────────────┬────────┐\n│ Col. 1 │             Col. 2 │ Col. 3 │\n├────────┼────────────────────┼────────┤\n│  0.000 │                1.0 │  0.000 │\n│  0.500 │ 0.8660254037844386 │  0.577 │\n│  0.866 │                0.5 │  1.732 │\n│  1.000 │                0.0 │    Inf │\n└────────┴────────────────────┴────────┘note: Note\nNow, this formatter uses the function sprintf1 from the package Formatting.jl that drastically improved the performance compared to the case with the macro @sprintf. Thanks to @RalphAS for the information!function ft_round(digits, [columns])Round the elements in the columns columns to the number of digits in digits.If digits is a Vector, then columns must be also be a Vector with the same number of elements. If digits is a Number, and columns is not specified (or is empty), then the rounding will be applied to the entire table. Otherwise, if digits is a Number and columns is a Vector, then the elements in the columns columns will be rounded to the number of digits digits.julia> data = Any[ f(a) for a = 0:30:90, f in (sind,cosd,tand)];\n\njulia> pretty_table(data; formatter=ft_round(1))\n┌────────┬────────┬────────┐\n│ Col. 1 │ Col. 2 │ Col. 3 │\n├────────┼────────┼────────┤\n│    0.0 │    1.0 │    0.0 │\n│    0.5 │    0.9 │    0.6 │\n│    0.9 │    0.5 │    1.7 │\n│    1.0 │    0.0 │    Inf │\n└────────┴────────┴────────┘\n\njulia> pretty_table(data; formatter=ft_round(1,[1,3]))\n┌────────┬────────────────────┬────────┐\n│ Col. 1 │             Col. 2 │ Col. 3 │\n├────────┼────────────────────┼────────┤\n│    0.0 │                1.0 │    0.0 │\n│    0.5 │ 0.8660254037844386 │    0.6 │\n│    0.9 │                0.5 │    1.7 │\n│    1.0 │                0.0 │    Inf │\n└────────┴────────────────────┴────────┘note: Note\nThe formatter keyword is supported in all back-ends."
},

{
    "location": "man/text_examples/#",
    "page": "Text back-end",
    "title": "Text back-end",
    "category": "page",
    "text": ""
},

{
    "location": "man/text_examples/#Text-back-end-examples-1",
    "page": "Text back-end",
    "title": "Text back-end examples",
    "category": "section",
    "text": "CurrentModule = PrettyTables\nDocTestSetup = quote\n    using PrettyTables\nendIn the following, it is presented how the following matrix can be printed using the text back-end.julia> data = Any[ 1    false      1.0     0x01 ;\n                   2     true      2.0     0x02 ;\n                   3    false      3.0     0x03 ;\n                   4     true      4.0     0x04 ;\n                   5    false      5.0     0x05 ;\n                   6     true      6.0     0x06 ;](Image: )(Image: )(Image: )(Image: )(Image: )The following example indicates how highlighters can be used to highlight the lowest and highest element in the data considering the columns 1, 3, and 5:(Image: )Since this package has support to the API defined by Tables.jl, then many formats, e.g DataFrames.jl, can be pretty printed:(Image: )You can use hlines keyword to divide the table into interesting parts:(Image: )If you want to break lines inside the cells, then you can set the keyword linebreaks to true. Hence, the characters \\n will cause a line break inside the cell.(Image: )The keyword noheader can be used to suppres the header, which leads to a very simplistic, compact format.(Image: )In the following, it is shown how the filters can be used to print only the even rows and columns:(Image: )By default, if the data is larger than the screen, then it will be cropped to fit it. This can be changed by using the keywords crop and screen_size.(Image: )You can use the keyword columns_width to select the width of each column, so that the data is cropped to fit the available space.(Image: )If you want to save the printed table to a file, you can do:julia> open(\"output.txt\", \"w\") do f\n            pretty_table(f,data)\n       endThis package can also be used to create data reports in text format:julia> data = [\"Torques\" \"\" \"\" \"\";\n               \"Atmospheric drag\" \".\"^10 10 \"10⁻⁵ Nm\";\n               \"Gravity gradient\" \".\"^10 3 \"10⁻⁵ Nm\";\n               \"Solar radiation pressure\" \".\"^10 0.1 \"10⁻⁵ Nm\";\n               \"Total\" \".\"^10 13.1 \"10⁻⁵ Nm\";\n               \"\" \"\" \"\" \"\"\n               \"Angular momentum\" \"\" \"\" \"\";\n               \"Atmospheric drag\" \".\"^10 6.5 \"Nms\";\n               \"Gravity gradient\" \".\"^10 3.0 \"Nms\";\n               \"Solar radiation pressure\" \".\"^10 1.0 \"Nms\";\n               \"Total\" \".\"^10 10.5 \"Nms\"]\n\njulia> pretty_table(data, borderless;\n                    noheader = true,\n                    cell_alignment = Dict( (1,1) => :l, (7,1) => :l ),\n                    formatter = ft_printf(\"%10.1f\", 2),\n                    highlighters = (hl_cell( [(1,1);(7,1)], crayon\"bold\"),\n                                    hl_col(2, crayon\"dark_gray\"),\n                                    hl_row([5,11], crayon\"bold yellow\")),\n                    hlines = [1,7],\n                    hlines_format = Tuple(\'─\' for _ = 1:4) )(Image: )"
},

{
    "location": "man/html_examples/#",
    "page": "HTML back-end",
    "title": "HTML back-end",
    "category": "page",
    "text": ""
},

{
    "location": "man/html_examples/#HTML-back-end-examples-1",
    "page": "HTML back-end",
    "title": "HTML back-end examples",
    "category": "section",
    "text": "CurrentModule = PrettyTables\nDocTestSetup = quote\n    using PrettyTables\nendComing soon..."
},

{
    "location": "lib/library/#",
    "page": "Library",
    "title": "Library",
    "category": "page",
    "text": ""
},

{
    "location": "lib/library/#PrettyTables.HTMLDecoration",
    "page": "Library",
    "title": "PrettyTables.HTMLDecoration",
    "category": "type",
    "text": "struct HTMLDecoration\n\nStructure that defines parameters to decorate a table cell.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.HTMLHighlighter",
    "page": "Library",
    "title": "PrettyTables.HTMLHighlighter",
    "category": "type",
    "text": "struct HTMLHighlighter\n\nDefines the default highlighter of a table when using the html backend.\n\nFields\n\nf: Function with the signature f(data,i,j) in which should return true      if the element (i,j) in data must be highlighter, or false      otherwise.\nfd: Function with the signature f(h,data,i,j) in which h is the       highlighter. This function must return the HTMLDecoration to be       applied to the cell that must be highlighted.\ndecoration: The HTMLDecoration to be applied to the highlighted cell if               the default fd is used.\n\nRemarks\n\nThis structure can be constructed using two helpers:\n\nHTMLHighlighter(f::Function, decoration::HTMLDecoration)\n\nHTMLHighlighter(f::Function, fd::Function)\n\nThe first will apply a fixed decoration to the highlighted cell specified in decoration whereas the second let the user select the desired decoration by specifying the function fd.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.HTMLTableFormat",
    "page": "Library",
    "title": "PrettyTables.HTMLTableFormat",
    "category": "type",
    "text": "struct HTMLTableFormat\n\nFormat that will be used to print the HTML table. All parameters are strings compatible with the corresponding HTML property.\n\nFields\n\ncss: CSS to be injected at the end of the <style> section.\ntable_width: Table width.\n\nRemarks\n\nBesides the usual HTML tags related to the tables (table, td,th,tr, etc.), there are three important classes that can be used to format tables using the variablecss`.\n\nheader: This is the class of the header (first line).\nsubheader: This is the class of the sub-headers (all the rest of the lines              in the header section).\nheaderLastRow: The last row of the header section has additionally this                  class.\nrowNumber: All the cells related to the row number have this class. Thus,              the row number header can be styled using th.rowNumber and the              row numbers cells can be styled using td.rowNumber.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.Highlighter",
    "page": "Library",
    "title": "PrettyTables.Highlighter",
    "category": "type",
    "text": "struct Highlighter\n\nDefines the highlighter of a table when using the text backend.\n\nFileds\n\nf: Function with the signature f(data,i,j) in which should return true      if the element (i,j) in data must be highlighter, or false      otherwise.\ncrayon: Crayon with the style of a highlighted element.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.Highlighter-Tuple{Any}",
    "page": "Library",
    "title": "PrettyTables.Highlighter",
    "category": "method",
    "text": "function Highlighter(f; kwargs...)\n\nConstruct a Highlighter with activation function f and pass all the keyword arguments kwargs to Crayon.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.LatexHighlighter",
    "page": "Library",
    "title": "PrettyTables.LatexHighlighter",
    "category": "type",
    "text": "struct LatexHighlighter\n\nDefines the default highlighter of a table when using the LaTeX backend.\n\nFields\n\nf: Function with the signature f(data,i,j) in which should return true      if the element (i,j) in data must be highlighter, or false      otherwise.\nfd: A function with the signature f(data,i,j,str)::String in which       data is the matrix, (i,j) is the element position in the table, and       str is the data converted to string. This function must return a       string that will be placed in the cell.\n\nRemarks\n\nThis structure can be constructed using two helpers:\n\nLatexHighlighter(f::Function, envs::Union{String,Vector{String}})\n\nLatexHighlighter(f::Function, fd::Function)\n\nThe first will apply recursively all the LaTeX environments in envs to the highlighted text whereas the second let the user select the desired decoration by specifying the function fd.\n\nThus, for example:\n\nLatexHighlighter((data,i,j)->true, [\"textbf\", \"small\"])\n\nwill wrap all the cells in the table in the following environment:\n\n\\textbf{\\small{<Cell text>}}\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.LatexTableFormat",
    "page": "Library",
    "title": "PrettyTables.LatexTableFormat",
    "category": "type",
    "text": "struct LatexTableFormat\n\nThis structure defines the format of the LaTeX table.\n\nFields\n\ntop_line: Top line of the table.\nheader_line: Line that separate the header from the table body.\nmid_line: Line printed in the middle of the table.\nbottom_line: Bottom line of the table.\nleft_vline: Left vertical line of the table.\nmid_vline: Vertical line in the middle of the table.\nright_vline: Right vertical line of the table.\nheader_envs: LaTeX environments that will be used in each header cell.\nsubheader_envs: LaTeX environments that will be used in each sub-header                   cell.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.TextFormat",
    "page": "Library",
    "title": "PrettyTables.TextFormat",
    "category": "type",
    "text": "struct TextFormat\n\nFields\n\nup_right_corner: Character in the up right corner.\nup_left_corner: Character in the up left corner.\nbottom_left_corner: Character in the bottom left corner.\nbottom_right_corner: Character in the bottom right corner.\nup_intersection: Character in the intersection of lines in the up part.\nleft_intersection: Character in the intersection of lines in the left part.\nright_intersection: Character in the intersection of lines in the right                       part.\nmiddle_intersection: Character in the intersection of lines in the middle of                        the table.\nbottom_intersection: Character in the intersection of the lines in the                        bottom part.\ncolumn: Character in a vertical line.\nrow: Character in a horizontal line.\ntop_line: If true, then the top table line will be drawn.\nheader_line: If true, then the line between the header and the data will                be drawn.\nbottom_line: If true, then the bottom table line will be drawn.\n\nPre-defined formats\n\nThe following pre-defined formats are available: unicode (default), mysql, compact, markdown, simple, ascii_rounded, and ascii_dots.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.ft_latex_sn-Tuple{Int64}",
    "page": "Library",
    "title": "PrettyTables.ft_latex_sn",
    "category": "method",
    "text": "function ft_latex_sn(m_digits, [columns])\n\nFormat the numbers of the elements in the columns columns to a scientific notation using LaTeX. The number is first printed using sprintf1 functions with the g modifier and then converted to the LaTeX format. The number of digits in the mantissa can be selected by the argument m_digits.\n\nIf m_digits is a Vector, then columns must be also be a Vector with the same number of elements. If m_digits is a Integer, and columns is not specified (or is empty), then the format will be applied to the entire table. Otherwise, if m_digits is a String and columns is a Vector, then the format will be applied only to the columns in columns.\n\nRemarks\n\nThis formatter will be applied only to the cells that are of type Number.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.ft_printf-Tuple{String}",
    "page": "Library",
    "title": "PrettyTables.ft_printf",
    "category": "method",
    "text": "function ft_printf(ftv_str, [columns])\n\nApply the formats ftv_str (see the function sprintf1 of the package Formatting.jl) to the elements in the columns columns.\n\nIf ftv_str is a Vector, then columns must be also be a Vector with the same number of elements. If ftv_str is a String, and columns is not specified (or is empty), then the format will be applied to the entire table. Otherwise, if ftv_str is a String and columns is a Vector, then the format will be applied only to the columns in columns.\n\nRemarks\n\nThis formatter will be applied only to the cells that are of type Number.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.ft_round-Tuple{Int64}",
    "page": "Library",
    "title": "PrettyTables.ft_round",
    "category": "method",
    "text": "function ft_round(digits, [columns])\n\nRound the elements in the columns columns to the number of digits in digits.\n\nIf digits is a Vector, then columns must be also be a Vector with the same number of elements. If digits is a Number, and columns is not specified (or is empty), then the rounding will be applied to the entire table. Otherwise, if digits is a Number and columns is a Vector, then the elements in the columns columns will be rounded to the number of digits digits.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.hl_cell-Tuple{Number,Number,Crayon}",
    "page": "Library",
    "title": "PrettyTables.hl_cell",
    "category": "method",
    "text": "function hl_cell(i::Number, j::Number, crayon::Crayon)\n\nHighlight the cell (i,j) with the crayon crayon.\n\nfunction hl_cell(cells::AbstractVector{NTuple(2,Int)}, crayon::Crayon)\n\nHighlights all the cells in cells with the crayon crayon.\n\nRemarks\n\nThose functions return a Highlighter to be used with the text backend.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.hl_cell-Tuple{Number,Number,HTMLDecoration}",
    "page": "Library",
    "title": "PrettyTables.hl_cell",
    "category": "method",
    "text": "hl_cell(i::Number, j::Number, decoration::HTMLDecoration)\n\nHighlight the cell (i,j) with the decoration decoration (see HTMLDecoration).\n\nfunction hl_cell(cells::AbstractVector{NTuple(2,Int)}, decoration::HTMLDecoration)\n\nHighlights all the cells in cells with the decoration decoration (see HTMLDecoration).\n\nRemarks\n\nThose functions return a HTMLHighlighter to be used with the HTML backend.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.hl_col-Tuple{Number,Crayon}",
    "page": "Library",
    "title": "PrettyTables.hl_col",
    "category": "method",
    "text": "function hl_col(i::Number, crayon::Crayon)\n\nHighlight the entire column i with the crayon crayon.\n\nfunction hl_col(cols::AbstractVector{Int}, crayon::Crayon)\n\nHighlights all the columns in cols with the crayon crayon.\n\nRemarks\n\nThose functions return a Highlighter to be used with the text backend.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.hl_col-Tuple{Number,HTMLDecoration}",
    "page": "Library",
    "title": "PrettyTables.hl_col",
    "category": "method",
    "text": "function hl_col(i::Number, decoration::HTMLDecoration)\n\nHighlight the entire column i with the decoration decoration.\n\nfunction hl_col(cols::AbstractVector{Int}, decoration::HTMLDecoration)\n\nHighlights all the columns in cols with the decoration decoration.\n\nRemarks\n\nThose functions return a HTMLHighlighter to be used with the HTML backend.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.hl_geq-Tuple{Number,HTMLDecoration}",
    "page": "Library",
    "title": "PrettyTables.hl_geq",
    "category": "method",
    "text": "function hl_geq(n::Number, decoration::HTMLDecoration)\n\nHighlight all elements that ≥ n using the decoration decoration.\n\nRemarks\n\nThose functions return a HTMLHighlighter to be used with the text backend.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.hl_geq-Tuple{Number}",
    "page": "Library",
    "title": "PrettyTables.hl_geq",
    "category": "method",
    "text": "function hl_geq(n::Number)\n\nHighlight all elements that ≥ n.\n\nRemarks\n\nThose functions return a Highlighter to be used with the text backend.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.hl_gt-Tuple{Number,HTMLDecoration}",
    "page": "Library",
    "title": "PrettyTables.hl_gt",
    "category": "method",
    "text": "hl_gt(n::Number, decoration::HTMLDecoration)\n\nHighlight all elements that > n using the decoration decoration.\n\nRemarks\n\nThose functions return a HTMLHighlighter to be used with the text backend.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.hl_gt-Tuple{Number}",
    "page": "Library",
    "title": "PrettyTables.hl_gt",
    "category": "method",
    "text": "function hl_gt(n::Number)\n\nHighlight all elements that > n.\n\nRemarks\n\nThose functions return a Highlighter to be used with the text backend.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.hl_leq-Tuple{Number,HTMLDecoration}",
    "page": "Library",
    "title": "PrettyTables.hl_leq",
    "category": "method",
    "text": "hl_leq(n::Number, decoration::HTMLDecoration)\n\nHighlight all elements that ≤ n using the decoration decoration.\n\nRemarks\n\nThose functions return a HTMLHighlighter to be used with the text backend.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.hl_leq-Tuple{Number}",
    "page": "Library",
    "title": "PrettyTables.hl_leq",
    "category": "method",
    "text": "function hl_leq(n::Number)\n\nHighlight all elements that ≤ n.\n\nRemarks\n\nThose functions return a Highlighter to be used with the text backend.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.hl_lt-Tuple{Number,HTMLDecoration}",
    "page": "Library",
    "title": "PrettyTables.hl_lt",
    "category": "method",
    "text": "hl_lt(n::Number, decoration::HTMLDecoration)\n\nHighlight all elements that < n using the decoration decoration.\n\nRemarks\n\nThose functions return a HTMLHighlighter to be used with the text backend.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.hl_lt-Tuple{Number}",
    "page": "Library",
    "title": "PrettyTables.hl_lt",
    "category": "method",
    "text": "function hl_lt(n::Number)\n\nHighlight all elements that < n.\n\nRemarks\n\nThose functions return a Highlighter to be used with the text backend.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.hl_row-Tuple{Number,Crayon}",
    "page": "Library",
    "title": "PrettyTables.hl_row",
    "category": "method",
    "text": "function hl_row(i::Number, crayon::Crayon)\n\nHighlight the entire row i with the crayon crayon.\n\nfunction hl_row(rows::AbstractVector{Int}, crayon::Crayon)\n\nHighlights all the rows in rows with the crayon crayon.\n\nRemarks\n\nThose functions return a Highlighter to be used with the text backend.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.hl_row-Tuple{Number,HTMLDecoration}",
    "page": "Library",
    "title": "PrettyTables.hl_row",
    "category": "method",
    "text": "function hl_row(i::Number, decoration::HTMLDecoration)\n\nHighlight the entire row i with the decoration decoration.\n\nfunction hl_row(rows::AbstractVector{Int}, decoration::HTMLDecoration)\n\nHighlights all the rows in rows with the decoration decoration.\n\nRemarks\n\nThose functions return a HTMLHighlighter to be used with the HTML backend.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.hl_value-Tuple{Any,HTMLDecoration}",
    "page": "Library",
    "title": "PrettyTables.hl_value",
    "category": "method",
    "text": "function hl_value(v::Any, decoration::HTMLDecoration)\n\nHighlight all the values that matches data[i,j] == v using the decoration decoration.\n\nRemarks\n\nThose functions return a HTMLHighlighter to be used with the text backend.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.hl_value-Tuple{Any}",
    "page": "Library",
    "title": "PrettyTables.hl_value",
    "category": "method",
    "text": "function hl_value(v::Any)\n\nHighlight all the values that matches data[i,j] == v.\n\nRemarks\n\nThose functions return a Highlighter to be used with the text backend.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.include_pt_in_file-Tuple{AbstractString,AbstractString,Vararg{Any,N} where N}",
    "page": "Library",
    "title": "PrettyTables.include_pt_in_file",
    "category": "method",
    "text": "function include_pt_in_file(filename::AbstractString, mark::AbstractString, args...; kwargs...)\n\nInclude a table in the file filename using the mark mark.\n\nThis function will print a table using the arguments args and keywords kwargs in the function pretty_table (the IO must not be passed to args here). Then, it will search inside the file filename for the following section:\n\n<PrettyTables mark>\n...\n</PrettyTables>\n\nand will replace everything between the marks with the printed table. If the closing tag is in a separate line, then all characters before it will be kept. This is important to add comment tags.\n\nIf the user wants to also remove the opening and ending tags, then pass the keyword remove_tags = true.\n\nThe keyword tag_append can be used to pass a string that can be used to add a text after the opening tag. This is important for HTML where the comments have openning and closing tags. Thus, if tag_append = \" -->\", then the following can be used to add a table into HTML files:\n\n<!-- <PrettyTables mark> -->\n...\n<!-- </PrettyTables> -->\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.pretty_table-Union{Tuple{T2}, Tuple{T1}, Tuple{Union{AbstractArray{T1,1}, AbstractArray{T1,2}},Union{AbstractArray{T2,1}, AbstractArray{T2,2}}}} where T2 where T1",
    "page": "Library",
    "title": "PrettyTables.pretty_table",
    "category": "method",
    "text": "function pretty_table([io::IO,] data::AbstractVecOrMat{T1}, header::AbstractVecOrMat{T2};  kwargs...) where {T1,T2}\n\nPrint to io the vector or matrix data with header header. If io is omitted, then it defaults to stdout. If header is empty, then it will be automatically filled with \"Col.  i\" for the i-th column.\n\nThe header can be a Vector or a Matrix. If it is a Matrix, then each row will be a header line. The first line is called header and the others are called sub-headers .\n\nfunction pretty_table([io::IO,] data::AbstractVecOrMat{T}; ...) where T\n\nPrint to io the vector or matrix data. If io is omitted, then it defaults to stdout. The header will be automatically filled with \"Col. i\" for the i-th column.\n\nfunction pretty_table([io::IO,] dict::Dict{K,V}; sortkeys = true, ...) where {K,V}\n\nPrint to io the dictionary dict in a matrix form (one column for the keys and other for the values). If io is omitted, then it defaults to stdout.\n\nIn this case, the keyword sortkeys can be used to select whether or not the user wants to print the dictionary with the keys sorted. If it is false, then the elements will be printed on the same order returned by the functions keys and values. Notice that this assumes that the keys are sortable, if they are not, then an error will be thrown.\n\nfunction pretty_table([io::IO,] table; ...)\n\nPrint to io the table table. In this case, table must comply with the API of Tables.jl. If io is omitted, then it defaults to stdout.\n\nKeywords\n\nalignment: Select the alignment of the columns (see the section Alignment).\nbackend: Select which back-end will be used to print the table (see the            section Backend). Notice that the additional configuration in            kwargs... depends on the selected backend. (see the section            Backend).\nfilters_row: Filters for the rows (see the section Filters).\nfilters_col: Filters for the columns (see the section Filters).\n\nAlignment\n\nThe keyword alignment can be a Symbol or a vector of Symbol.\n\nIf it is a symbol, we have the following behavior:\n\n:l or :L: the text of all columns will be left-aligned;\n:c or :C: the text of all columns will be center-aligned;\n:r or :R: the text of all columns will be right-aligned;\nOtherwise it defaults to :r.\n\nIf it is a vector, then it must have the same number of symbols as the number of columns in data. The i-th symbol in the vector specify the alignment of the i-th column using the same symbols as described previously.\n\nFilters\n\nIt is possible to specify filters to filter the data that will be printed. There are two types of filters: the row filters, which are specified by the keyword filters_row, and the column filters, which are specified by the keyword filters_col.\n\nThe filters are a tuple of functions that must have the following signature:\n\nf(data,i)::Bool\n\nin which data is a pointer to the matrix that is being printed and i is the i-th row in the case of the row filters or the i-th column in the case of column filters. If this function returns true for i, then the i-th row (in case of filters_row) or the i-th column (in case of filters_col) will be printed. Otherwise, it will be omitted.\n\nA set of filters can be passed inside of a tuple. Notice that, in this case, all filters for a specific row or column must be return true so that it can be printed, i.e the set of filters has an AND logic.\n\nIf the keyword is set to nothing, which is the default, then no filtering will be applied to the data.\n\nnote: Note\nThe filters do not change the row and column numbering for the others modifiers such as column width specification, formatters, and highlighters. Thus, for example, if only the 4-th row is printed, then it will also be referenced inside the formatters and highlighters as 4 instead of 1.\n\n\n\nPretty table text back-end\n\nThis back-end produces text tables. This back-end can be used by selecting back-end = :text.\n\nKeywords\n\nborder_crayon: Crayon to print the border.\nheader_crayon: Crayon to print the header.\nsubheaders_crayon: Crayon to print sub-headers.\nrownum_header_crayon: Crayon for the header of the column with the row                         numbers.\ntext_crayon: Crayon to print default text.\nautowrap: If true, then the text will be wrapped on spaces to fit the             column. Notice that this function requires linebreaks = true and             the column must have a fixed size (see columns_width).\ncell_alignment: A dictionary of type (i,j) => a that overrides that                   alignment of the cell (i,j) to a regardless of the                   columns alignment selected. a must be a symbol like                   specified in the section Alignment.\ncolumns_width: A set of integers specifying the width of each column. If the                  width is equal or lower than 0, then it will be automatically                  computed to fit the large cell in the column. If it is                  a single integer, then this number will be used as the size                  of all columns. (Default = 0)\ncrop: Select the printing behavior when the data is bigger than the         available screen size (see screen_size). It can be :both to crop         on vertical and horizontal direction, :horizontal to crop only on         horizontal direction, :vertical to crop only on vertical direction,         or :none to do not crop the data at all.\nformatter: See the section Formatter.\nhighlighters: An instance of Highlighter or a tuple with a list of                 text highlighters (see the section Text highlighters).\nhlines: A vector of Int indicating row numbers in which an additional           horizontal line should be drawn after the row. Notice that numbers           lower than 1 and equal or higher than the number of rows will be           neglected.\nhlines_format: A tuple of 4 characters specifying the format of the                  horizontal lines. The characters must be the left                  intersection, the middle intersection, the right                  intersection, and the row. If it is nothing, then it will                  use the same format specified in tf.                  (Default = nothing)\nlinebreaks: If true, then \\n will break the line inside the cells.               (Default = false)\nnoheader: If true, then the header will not be printed. Notice that all             keywords and parameters related to the header and sub-headers will             be ignored. (Default = false)\nnosubheader: If true, then the sub-header will not be printed, i.e. the                header will contain only one line. Notice that this option has                no effect if noheader = true. (Default = false)\nsame_column_size: If true, then all the columns will have the same size.                     (Default = false)\nscreen_size: A tuple of two integers that defines the screen size (num. of                rows, num. of columns) that is available to print the table. It                is used to crop the data depending on the value of the keyword                crop. If it is nothing, then the size will be obtained                automatically. Notice that if a dimension is not positive, then                it will be treated as unlimited. (Default = nothing)\nshow_row_number: If true, then a new column will be printed showing the                    row number. (Default = false)\ntf: Table format used to print the table (see TextFormat).       (Default = unicode)\n\nThe keywords header_crayon and subheaders_crayon can be a Crayon or a Vector{Crayon}. In the first case, the Crayon will be applied to all the elements. In the second, each element can have its own crayon, but the length of the vector must be equal to the number of columns in the data.\n\nCrayons\n\nA Crayon is an object that handles a style for text printed on terminals. It is defined in the package Crayons.jl. There are many options available to customize the style, such as foreground color, background color, bold text, etc.\n\nA Crayon can be created in two different ways:\n\njulia> Crayon(foreground = :blue, background = :black, bold = :true)\n\njulia> crayon\"blue bg:black bold\"\n\nFor more information, see the package documentation.\n\nText highlighters\n\nA set of highlighters can be passed as a Tuple to the highlighter keyword. Each highlighter is an instance of the structure Highlighter that contains two fields:\n\nf: Function with the signature f(data,i,j) in which should return true      if the element (i,j) in data must be highlighted, or false      otherwise.\ncrayon: Crayon with the style of a highlighted element.\n\nThe function f has the following signature:\n\nf(data, i, j)\n\nin which data is a reference to the data that is being printed, i and j are the element coordinates that are being tested. If this function returns true, then the highlight style will be applied to the (i,j) element. Otherwise, the default style will be used.\n\nNotice that if multiple highlighters are valid for the element (i,j), then the applied style will be equal to the first match considering the order in the Tuple highlighters.\n\nIf only a single highlighter is wanted, then it can be passed directly to the keyword highlighter without being inside a Tuple.\n\n\n\nPretty table HTML backend\n\nThis backend produces HTML tables. This backend can be used by selecting backend = :html.\n\nKeywords\n\ncell_alignment: A dictionary of type (i,j) => a that overrides that                   alignment of the cell (i,j) to a regardless of the                   columns alignment selected. a must be a symbol like                   specified in the section Alignment.\nformatter: See the section Formatter.\nhighlighters: An instance of HTMLHighlighter or a tuple with a list of                 HTML highlighters (see the section HTML highlighters).\nlinebreaks: If true, then \\n will be replaced by <br>.               (Default = false)\nminimal: If true, then all HTML headers will be omitted, i.e. only the            code between <table> and </table> will be printed.            (Default = false)\nnoheader: If true, then the header will not be printed. Notice that all             keywords and parameters related to the header and sub-headers will             be ignored. (Default = false)\nnosubheader: If true, then the sub-header will not be printed, i.e. the                header will contain only one line. Notice that this option has                no effect if noheader = true. (Default = false)\nshow_row_number: If true, then a new column will be printed showing the                    row number. (Default = false)\ntf: An instance of the structure HTMLTableFormat that defines the general       format of the HTML table.\n\nHTML highlighters\n\nA set of highlighters can be passed as a Tuple to the highlighter keyword. Each highlighter is an instance of a structure that is a subtype of AbstractHTMLHighlighter. It also must also contain at least the following two fields to comply with the API:\n\nf: Function with the signature f(data,i,j) in which should return true      if the element (i,j) in data must be highlighter, or false      otherwise.\nfd: Function with the signature f(h,data,i,j) in which h is the       highlighter. This function must return the HTMLDecoration to be       applied to the cell that must be highlighted.\n\nThe function f has the following signature:\n\nf(data, i, j)\n\nin which data is a reference to the data that is being printed, i and j are the element coordinates that are being tested. If this function returns true, then the highlight style will be applied to the (i,j) element. Otherwise, the default style will be used.\n\nNotice that if multiple highlighters are valid for the element (i,j), then the applied style will be equal to the first match considering the order in the Tuple highlighters.\n\nIf the function f returns true, then the function fd(h,data,i,j) will be called and must return an element of type HTMLDecoration that contains the decoration to be applied to the cell.\n\nIf only a single highlighter is wanted, then it can be passed directly to the keyword highlighter without being inside a Tuple.\n\n\n\nFormatter\n\nThe keyword formatter can be used to pass functions to format the values in the columns. It must be a Dict{Number,Function}(). The key indicates the column number in which its elements will be converted by the function in the value of the dictionary. The function must have the following signature:\n\nf(value, i)\n\nin which value is the data and i is the row number. It must return the formatted value.\n\nFor example, if we want to multiply all values in odd rows of the column 2 by π, then the formatter should look like:\n\nDict(2 => (v,i)->isodd(i) ? v*π : v)\n\nIf the key 0 is present, then the corresponding function will be applied to all columns that does not have a specific key.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.@pt-Tuple",
    "page": "Library",
    "title": "PrettyTables.@pt",
    "category": "macro",
    "text": "macro pt(expr...)\n\nPretty print tables in expr to stdout using the global configurations selected with the macro @ptconf.\n\nMultiple tables can be printed by passing multiple expressions like:\n\n@pt table1 table2 table3\n\nThe user can select the table header by passing the expression:\n\n:header = [<Vector with the header>]\n\nNotice that the header is valid only for the next printed table. Hence:\n\n@pt :header = header1 table1 :header = header2 table2 table3\n\nwill print table1 using header1, table2 using header2, and table3 using the default header.\n\nExamples\n\njulia> @ptconf tf = simple\n\njulia> @pt :header = [\"Time\",\"Velocity\"] [1:1:10 ones(10)] :header = [\"Time\",\"Position\"] [1:1:10 1:1:10]\n======= ===========\n  Time   Velocity\n======= ===========\n   1.0        1.0\n   2.0        1.0\n   3.0        1.0\n   4.0        1.0\n   5.0        1.0\n   6.0        1.0\n   7.0        1.0\n   8.0        1.0\n   9.0        1.0\n  10.0        1.0\n======= ===========\n======= ===========\n  Time   Position\n======= ===========\n     1          1\n     2          2\n     3          3\n     4          4\n     5          5\n     6          6\n     7          7\n     8          8\n     9          9\n    10         10\n======= ===========\n\njulia> @pt ones(3,3) + I + [1 2 3; 4 5 6; 7 8 9]\n========= ======== =========\n  Col. 1   Col. 2   Col. 3\n========= ======== =========\n     3.0      3.0      4.0\n     5.0      7.0      7.0\n     8.0      9.0     11.0\n========= ======== =========\n\nRemarks\n\nWhen more than one table is passed to this macro, then multiple calls to pretty_table will occur. Hence, the cropping algorithm will behave exactly the same as printing the tables separately.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.@ptconf-Tuple",
    "page": "Library",
    "title": "PrettyTables.@ptconf",
    "category": "macro",
    "text": "macro ptconf(expr...)\n\nAdd configurations in expr to be used with the macro @pt.\n\nThe expression format must be:\n\nkeyword1 = value1 keyword2 = value2 ...\n\nin which the keywords can be any other possible keyword that can be used in the function pretty_table.\n\nwarning: Warning\nIf a keyword is not supported by the function pretty_table, then no error message is printed when calling @ptconf. However, an error will be thrown when @pt is called.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.@ptconfclean-Tuple{}",
    "page": "Library",
    "title": "PrettyTables.@ptconfclean",
    "category": "macro",
    "text": "macro @ptconfclean()\n\nClean all global configurations to pretty print tables using the macro @pt.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.AbstractHTMLHighlighter",
    "page": "Library",
    "title": "PrettyTables.AbstractHTMLHighlighter",
    "category": "type",
    "text": "abstract type AbstractHTMLHighlighter\n\nAll HTLM highlighters must be a subtype of AbstractHTMLHighlighter. They API dictates that they must implement two functions:\n\nf: Function with the signature f(data,i,j) in which should return true      if the element (i,j) in data must be highlighter, or false      otherwise.\nfd: Function with the signature f(h,data,i,j) in which h is the       highlighter. This function must return the HTMLDecoration to be       applied to the cell that must be highlighted.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.PrintInfo",
    "page": "Library",
    "title": "PrettyTables.PrintInfo",
    "category": "type",
    "text": "struct PrintInfo{Td,Th}\n\nThis structure stores the information required so that the backends can print the tables.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables.Screen",
    "page": "Library",
    "title": "PrettyTables.Screen",
    "category": "type",
    "text": "mutable struct Screen\n\nStore the information of the screen and the current cursor position. Notice that this is not the real cursor position with respect to the screen, but with respect to the point in which the table is printed.\n\nFields\n\nsize: Screen size.\nrow: Current row.\ncol: Current column.\nhas_color: Indicates if the screen has color support.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables._draw_continuation_row-NTuple{9,Any}",
    "page": "Library",
    "title": "PrettyTables._draw_continuation_row",
    "category": "method",
    "text": "function _draw_continuation_row(screen, io, tf, text_crayon, border_crayon, num_printed_cols, cols_width, show_row_number, row_number_width)\n\nDraw the continuation row when the table has filled the vertical space available. This function prints in each column the character ⋮ centered.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables._draw_line!-NTuple{11,Any}",
    "page": "Library",
    "title": "PrettyTables._draw_line!",
    "category": "method",
    "text": "function _draw_line!(screen, io, left, intersection, right, row, border_crayon, num_cols, cols_width, show_row_number, row_number_width)\n\nDraw a vertical line in io using the information in screen.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables._eol-Tuple{Any}",
    "page": "Library",
    "title": "PrettyTables._eol",
    "category": "method",
    "text": "function _eol(screen)\n\nReturn true if the cursor is at the end of line or false otherwise.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables._nl!-Tuple{Any,Any}",
    "page": "Library",
    "title": "PrettyTables._nl!",
    "category": "method",
    "text": "function _nl!(screen, io)\n\nAdd a new line into io using the screen information in screen.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables._p!",
    "page": "Library",
    "title": "PrettyTables._p!",
    "category": "function",
    "text": "function _p!(screen, io, crayon, str, final_line_print = false)\n\nPrint str into io using the Crayon crayon with the screen information in screen. The parameter final_line_print must be set to true if this is the last string that will be printed in the line. This is necessary for the algorithm to select whether or not to include the continuation character.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables._str_aligned-Tuple{AbstractString,Symbol,Integer}",
    "page": "Library",
    "title": "PrettyTables._str_aligned",
    "category": "method",
    "text": "function _str_aligned(data::AbstractString, alignment::Symbol, field_size::Integer)\n\nThis function returns the string data with alignment alignment in a field with size field_size. alignment can be :l or :L for left alignment, :c or :C for center alignment, or :r or :R for right alignment. It defaults to :r if alignment is any other symbol.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables._str_escaped-Tuple{AbstractString}",
    "page": "Library",
    "title": "PrettyTables._str_escaped",
    "category": "method",
    "text": "function _str_escaped(str::AbstractString)\n\nReturn the escaped string representation of str.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#PrettyTables._str_line_breaks",
    "page": "Library",
    "title": "PrettyTables._str_line_breaks",
    "category": "function",
    "text": "function _str_line_breaks(str::AbstractString, autowrap::Bool = false, width::Int = 0)\n\nSplit the string str into substring, each one meaning one new line. If autowrap is true, then the text will be wrapped so that it fits the column with the width width.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#Library-1",
    "page": "Library",
    "title": "Library",
    "category": "section",
    "text": "Documentation for PrettyTables.jl.Modules = [PrettyTables]"
},

]}