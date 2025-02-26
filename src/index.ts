import type { TextlintRuleModule } from "@textlint/types";
import { languages } from "./consts/languages";

const report: TextlintRuleModule = (context) => {
    const { Syntax, RuleError, report } = context;
    return {
        [Syntax.CodeBlock](node) {
            const lang = node.lang || '';
            if (!languages.includes(lang)) {
                const ruleError = new RuleError(`不正なシンタックスハイライトのファイルタイプが見つかりました。:${lang}`);
                report(node, ruleError);
            }
        }
    }
};

export default report;
