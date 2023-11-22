```tsx
const InputBox = () => {
  const InputRef = useRef<HTMLInputElement>(null); // specify ref type

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};
```
