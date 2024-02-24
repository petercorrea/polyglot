// gcc posix_threads.c -o posix_threads -lpthread && ./posix_threads

#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>

// thread_function needs to take a single void* and return a void*.
void *thread_function(void *arg) {
  int *input = (int *)arg;
  int *result = malloc(sizeof(int));
  *result = *input + 42;
  pthread_exit(result);
}

int main() {
  // thread_create will run the thread_function update thread_id
  pthread_t thread_id;
  int value = 10;
  if (pthread_create(&thread_id, NULL, thread_function, &value) != 0) {
    perror("error in pthread_create");
    exit(EXIT_FAILURE);
  }

  // Wait for the thread to finish and collect the return value
  void *thread_result;
  if (pthread_join(thread_id, &thread_result) != 0) {
    perror("error in pthread_join");
    exit(EXIT_FAILURE);
  }

  // Cast the returned void*
  int result = *((int *)thread_result);

  // Free memory allocated by the thread and return
  printf("Thread returned value: %d\n", result);
  free(thread_result);
  return 0;
}
