import { useCallback, useEffect } from 'react'
import DFA from '../algorithm/DFA';
import { Match } from '../model/Data_Model';

type Props = {
    keywords: string[];
    text: string;
    onUpdateResults: (results: Match[]) => void;
}

const useSearchText = ({keywords, text, onUpdateResults}: Props) => {
    const dfa = DFA();
    // const searchResults = useRef<Match[]>();
    const searchText = useCallback(() => {
        dfa.patternMatchingMachine(keywords);
        dfa.buildFailureLinks();
        // searchResults.current = dfa.search(text || '');
        onUpdateResults(dfa.search(text || ''));
      }, [dfa, keywords, onUpdateResults, text]);

      useEffect(() => {
        searchText();
      }, [keywords, searchText, text]);

    // return searchResults;
}

export default useSearchText;