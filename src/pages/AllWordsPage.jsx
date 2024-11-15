import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../assets/hooks/ThemeContext';
import allWords from '../assets/data/words.json';
import WordsUtilityBar from '../components/WordsUtilityBar';
import WordsScrollView from '../components/WordsScrollView';
import WordsGridView from '../components/WordsGridView';

const AllWordsPage = () => {
  const filterOptions = getFilterOptions();
  const [isScrollView, setScrollView] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  
  useEffect(() => {
    const theme = 'variant-base';
    setTheme(theme);
  }, [setTheme]);

  const [selectedFilterOptions, setSelectedFilterOptions] = useState([]);
  const [filteredWords, setFilteredWords] = useState(getFilteredWords(selectedFilterOptions));

  function getFilterOptions() {
    const options = [];

    for (const word of allWords) {
      if (options.indexOf(word.tags) !== -1) {
        continue;
      }

      options.push(word.tags);
    }

    return options;
  }

  function getFilteredWords(selectedFilterOptions) {
    if(!selectedFilterOptions || selectedFilterOptions.length === 0) {
      return allWords;
    }

    return allWords.filter((word) => selectedFilterOptions.indexOf(word.tags) !== -1);
  }

  function onFilterChange(selectedFilterOptions) {
    setSelectedFilterOptions(selectedFilterOptions);
    setFilteredWords(getFilteredWords(selectedFilterOptions));
  }

  function onViewChange() {
    setScrollView(!isScrollView);
  }

  return (
    <div className={`${theme} px-16 scrollbar-hide-active`}>
      <WordsUtilityBar 
        theme={theme} 
        filterOptions={filterOptions} 
        onFilterChange={onFilterChange} 
        onViewChange={onViewChange} 
      />
      {
        isScrollView ? 
        <WordsScrollView words={filteredWords}/> : 
        <WordsGridView words={filteredWords} />
      }
    </div>
  )
}

export default AllWordsPage