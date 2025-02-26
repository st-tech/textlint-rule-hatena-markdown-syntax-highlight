import type { TextlintRuleModule } from "@textlint/types";
import { languages } from "./consts/languages";

const report: TextlintRuleModule = (context) => {
    const { Syntax, RuleError, report } = context;
    return {
        [Syntax.CodeBlock](node) {
            const lang = node.lang || '';
            if (languages.includes(lang)) {
                return;
            }
            if (lang.includes(":")) {
                const ruleError = new RuleError(`はてなでは、コロン区切りでファイル名を記載することはできません。コード内に直接示すか、本文中に示してください。`);
                report(node, ruleError);
                return;
            }
            const ruleError = new RuleError(`不正なシンタックスハイライトのファイルタイプが見つかりました。:${lang}`);
            report(node, ruleError);
        }
    }
};

export default report;
