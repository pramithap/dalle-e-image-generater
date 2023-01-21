//define re-usable functions

import { surpriseMePrompts } from '../constants' ;
import FileSaver from 'file-saver';

export function getRandomPrompt (prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randmPrompt = surpriseMePrompts[randomIndex];

    if ( randmPrompt === prompt ) return getRandomPrompt(prompt);

    return randmPrompt;
}

export async function downloadImage (_id, photo) {
   FileSaver.saveAs(photo, `download-${_id}.jpg`);
}