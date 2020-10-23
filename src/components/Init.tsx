import React, { ReactElement } from 'react'

interface Props {
    categories: Category[];
}

interface Category {
    name: string;
    id: number;
}

const difficulties = ['random', 'easy', 'medium', 'hard'];
const types = [
    { value: '', displayName: 'Random' },
    { value: 'boolean', displayName: 'True Or False' },
    { value: 'multiple', displayName: 'Multiple Choice' }];

export default function Init({ categories }: Props): ReactElement {

    return categories[0] ?
        (
            <div className="jumbotron rounded-lg">
                <div className="card-title">
                    <h3>Set up the quiz</h3>
                </div>
                <div className="card-body">
                    <div className="flex-column">
                        Choose an Category:
            <select name="categories" id="categories" className="custom-select">
                            {categories.map((c, i) => <option key={i} value={c.id}>{c.name}</option>)}
                        </select>
                    </div>
                    <div className="flex-column">
                        Choose Difficulty:
                    <div className=" form-check">
                            {difficulties.map((d, i) => <label><input key={i} type="radio" name="difficulty" value={d} />{d}</label>)}
                        </div>
                    </div>
                    <div className="flex-column">
                        Choose Type:
                    <div className=" form-check">
                            {types.map((t, i) => <label><input key={t.value} type="radio" name="type" value={t.value} />{t.displayName}</label>)}
                        </div>
                    </div>

                    <button className="btn btn-primary" type="button">Start Quiz</button>
                </div>
            </div>
        )
        : <div className="jumbotron rounded-lg"> carregando... </div>
}
