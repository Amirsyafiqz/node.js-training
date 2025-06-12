import { writeFile, appendFile, readFile } from 'fs/promises';

const filePath = './test.txt';

const writeAppendRead = async () => {
  try {
    // Step 1: Write to file (overwrite if exists)
    await writeFile(filePath, 'Hello, I am writing to this file.\n');
    console.log('✅ File written to...');

    // Step 2: Append a new line
    await appendFile(filePath, 'This line was appended later.\n');
    console.log('➕ Line appended...');

    // Step 3: Read and display the full file content
    const data = await readFile(filePath, 'utf8');
    console.log('\n📄 File content:\n' + data);
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
};

writeAppendRead();


