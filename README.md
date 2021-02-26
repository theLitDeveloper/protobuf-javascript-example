# protobuf javascript example

## Installation
```bash
git clone https://github.com/theLitDeveloper/protobuf-javascript-example.git
cd protobuf-javascript-example
npm install
```

## Step 1: Creating a hackers.json to compare with
```bash
node index
```
As a result you should see a hackers.json file in the current directory, with a size of 486 bytes.

## Step 2: Generating the Javascript protobuf file
```bash
protoc --js_out=import_style=commonjs,binary:. hackers.proto
```

## Step 3: Creating a binary file
```bash
node index2
```

## Results

| File name | File size |
|-|-|
|hackers.json|486|
|hackers.bin|217|

**You saved 55,35% (269 bytes)!!!**
