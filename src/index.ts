import type { TextlintRuleModule } from "@textlint/types";
import { languages } from "./consts/languages";
import { invalidLangToValids } from "./consts/invalidLangToValids";

const report: TextlintRuleModule = (context) => {
    const { Syntax, RuleError, report } = context;
    return {
        [Syntax.CodeBlock](node) {
            const lang = node.lang || '';
            if (!lang || languages.includes(lang)) {
                return;
            }
            if (lang.includes(":")) {
                const ruleError = new RuleError(`はてなでは、コロン区切りでファイル名を記載することはできません。コード内に直接示すか、本文中に示してください。:${lang}`);
                report(node, ruleError);
                return;
            }
            let errorMessage = `不正なシンタックスハイライトのファイルタイプが見つかりました。:${lang}\n正しいファイルタイプはhttps://help.hatenablog.com/entry/markup/syntaxhighlight を参照してください。`;

            const validLang = invalidLangToValids.get(lang);
            if (validLang) {
                errorMessage += `\nよくある間違い: ${lang} → ${validLang}`;
            }
            const ruleError = new RuleError(errorMessage);
            report(node, ruleError);
        }
    }
};

export default report;
