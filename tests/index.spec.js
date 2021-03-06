import {getWordCount} from "../src/logic";

describe('Index', () => {
    describe('#getWordCount', () => {
        it('getWordCount', () => {
            const wordCount = getWordCount("Hello World");
    
            expect(wordCount).toEqual(2);
        });
    
        it('shouldn\'t count numbers in text', () => {
            const wordCount = getWordCount("Hello World 1 11");
    
            expect(wordCount).toEqual(2);
        });
    
        it('shouldn\'t count strings with punctuation in text', () => {
            const wordCount = getWordCount("Hello World Cheese!");
    
            expect(wordCount).toEqual(2);
        });
    
        it('shouldn\'t count strings with numbers in them', () => {
            const wordCount = getWordCount("Hello World Cheese12");
    
            expect(wordCount).toEqual(2);
        });
    
        it('should get text length from one letter text', () => {
            const wordCount = getWordCount("ab");
    
            expect(wordCount).toEqual(1);
        });
    
        it('should ignore new carrier line and return correct word length', () => {
            const wordCount = getWordCount("ab\n");
    
            expect(wordCount).toEqual(1);
        });
    
        it('should count words on multiple lines', () => {
            const wordCount = getWordCount(`
            One
            Two
            Three
            `);
    
            expect(wordCount).toEqual(3);
        })
    
        it('should ignore new carrier line between words', () => {
            const wordCount = getWordCount("one\ntwo");
    
            expect(wordCount).toEqual(2);
        });
    
        it('should ignore multiple new carrier lines or spaces between words', () => {
            const wordCount = getWordCount("av \n\ntwo  b");
    
            expect(wordCount).toEqual(3);
        });
    
        it('should ignore multiple new carrier lines or spaces between words', () => {
            const wordCount = getWordCount("ab \n\n two  b");
    
            expect(wordCount).toEqual(3);
        });

        it('should not count special words', () => {
            const wordCount = getWordCount("Mary had a little lamb");
    
            expect(wordCount).toEqual(4);
        });

        it('should not count empty string', () => {
            const wordCount = getWordCount("");
    
            expect(wordCount).toEqual(0);
        })
    });
});