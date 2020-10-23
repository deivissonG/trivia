import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Init from './components/Init';
import './App.css'

const App: React.FC = _ => {

  const [questions] = useState([]);
  const [index, setIndex] = useState(0);
  const [categories, setCategories] = useState([]);

  const nextQuestion = () => {
    setIndex(index + 1);
  }

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then(res => res.json())
      .then(
        (result) => {
          setCategories(result.trivia_categories);
        },
        // Nota: é importante lidar com errros aqui
        // em vez de um bloco catch() para não receber
        // exceções de erros reais nos componentes.
        (error) => {
          alert(error);
        }
      )
  }, [])

  return <div className="h-100 justify-content-center align-items-center">
    {
      !!questions
        ? <Init categories={categories} />
        : <Card question={questions[index]} nextQuestion={nextQuestion} />
    }
  </div>

}

export default App

