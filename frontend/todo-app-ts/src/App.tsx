import { Todos } from "./componentes/Todos";
import { Footer } from "./componentes/Footer";
import { Header } from "./componentes/Header";
import { useTodos } from "./hooks/useTodos";

const App = (): JSX.Element => {
  const {
    activeCount,
    completedCount,
    filterSelected,
    handleClearCompleted,
    handleCompleted,
    handleFilterChange,
    handleRemove,
    handleSave,
    handleUpdateTitle,
    todos: filteredTodos,
  } = useTodos();

  return (
    <div className="todoapp">
      <Header saveTodo={handleSave} />
      <Todos
        removeTodo={handleRemove}
        setCompleted={handleCompleted}
        setTitle={handleUpdateTitle}
        todos={filteredTodos}
      />
      <Footer
        handleFilterChange={handleFilterChange}
        completedCount={completedCount}
        activeCount={activeCount}
        filterSelected={filterSelected}
        onClearCompleted={handleClearCompleted}
      />
    </div>
  );
};

export default App;
